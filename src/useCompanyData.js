import { useState, useEffect } from "react";

const SHEET_ID = "104OliKY8JZg0lINDsZ02JD41SZD2WGz8gra89fuXrKY";
const TABS = [
  { name: "DAC", category: "DAC", label: "Direct Air Capture" },
  { name: "BiCRS", category: "BiCRS", label: "Biomass Carbon Removal & Storage" },
  { name: "EM", category: "EM", label: "Enhanced Mineralization" },
  { name: "mCDR", category: "mCDR", label: "Marine CDR" },
];

function parseGvizResponse(text) {
  // Google Viz API wraps JSON in: google.visualization.Query.setResponse({...})
  const match = text.match(/google\.visualization\.Query\.setResponse\(({[\s\S]*})\)/);
  if (!match) return [];
  const data = JSON.parse(match[1]);
  if (!data.table || !data.table.rows) return [];
  return data.table.rows
    .map((row) => {
      const cells = row.c || [];
      return {
        name: cells[0]?.v || "",
        country: cells[1]?.v || "",
        type: cells[2]?.v || "",
        url: cells[3]?.v || "",
      };
    })
    .filter((r) => r.name && r.name.trim() !== "");
}

async function fetchTab(tabName, category) {
  // Query columns B, C, D, E where B is not null, skipping the intro rows
  const query = encodeURIComponent("SELECT B,C,D,E WHERE B IS NOT NULL OFFSET 35");
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}&tq=${query}`;
  const res = await fetch(url);
  const text = await res.text();
  const rows = parseGvizResponse(text);
  return rows.map((r) => ({ ...r, category }));
}

export const CATEGORIES = ["All", ...TABS.map((t) => t.category)];
export const CATEGORY_LABELS = Object.fromEntries(TABS.map((t) => [t.category, t.label]));

export default function useCompanyData() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const results = await Promise.all(
          TABS.map((t) => fetchTab(t.name, t.category))
        );
        if (!cancelled) {
          setCompanies(results.flat().sort((a, b) => a.name.localeCompare(b.name)));
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return { companies, loading, error };
}

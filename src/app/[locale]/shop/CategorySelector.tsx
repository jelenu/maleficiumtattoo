import Text from "@/components/ui/basics/Text";

type Category = {
  id: string;
  slug: string;
  name?: string;
};

type CategorySelectorProps = {
  categories: Category[];
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
  loading: boolean;
  t: {
    loading: Record<"es" | "en" | "de", string>;
    allCategories: Record<"es" | "en" | "de", string>;
  };
  lang: "es" | "en" | "de";
};

export default function CategorySelector({
  categories,
  selectedCategory,
  setSelectedCategory,
  loading,
  t,
  lang,
}: CategorySelectorProps) {
  if (loading) {
    return <Text className="text-zinc-400">{t.loading[lang]}</Text>;
  }
  return (
    <div className="mb-8 flex flex-wrap gap-2 justify-center">
      <button
        type="button"
        onClick={() => setSelectedCategory("all")}
        className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors border ${
          !selectedCategory || selectedCategory === "all"
            ? "bg-zinc-200 text-zinc-900 border-zinc-300"
            : "bg-zinc-800/60 text-zinc-300 border-zinc-700 hover:bg-zinc-700/70"
        }`}
      >
        {t.allCategories[lang]}
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => setSelectedCategory(cat.id)}
          className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors border ${
            selectedCategory === cat.id
              ? "bg-zinc-200 text-zinc-900 border-zinc-300"
              : "bg-zinc-800/60 text-zinc-300 border-zinc-700 hover:bg-zinc-700/70"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

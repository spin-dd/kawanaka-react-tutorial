import { useState } from "react";
import { CATEGORIES } from "../data/categories";
import type { Entry } from "../types/entry";

type EntryFormProps = {
  onAdd: (entry: Omit<Entry, "id">) => void;
};

function EntryForm({ onAdd }: EntryFormProps) {
  const [date, setDate] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [category, setCategory] = useState("未分類");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [dateError, setDateError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [amountError, setAmountError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let hasError = false;

    if (date === "") {
      setDateError("日付を入力してください");
      hasError = true;
    } else {
      setDateError("");
    }

    if (title.trim() === "") {
      setTitleError("内容を入力してください");
      hasError = true;
    } else {
      setTitleError("");
    }

    if (Number(amount) < 1) {
      setAmountError("1円以上の金額を入力してください");
      hasError = true;
    } else {
      setAmountError("");
    }

    if (hasError) return;

    onAdd({
      date,
      title: title.trim(),
      type,
      category,
      amount: Number(amount),
      note: "",
    });

    setDate("");
    setTitle("");
    setAmount("");
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="f-date" className="text-xs text-neutral-600">
            日付
          </label>
          <input
            id="f-date"
            type="date"
            className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm focus:outline-2 focus:outline-blue-700"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {dateError && (
            <span className="text-xs text-red-700">{dateError}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-neutral-600">種別</span>
          <div className="flex h-10 items-center gap-4 text-sm">
            <label className="flex items-center gap-1.5">
              <input
                type="radio"
                name="type"
                value="expense"
                checked={type === "expense"}
                onChange={() => setType("expense")}
              />
              支出
            </label>
            <label className="flex items-center gap-1.5">
              <input
                type="radio"
                name="type"
                value="income"
                checked={type === "income"}
                onChange={() => setType("income")}
              />
              収入
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="f-title" className="text-xs text-neutral-600">
          内容
        </label>
        <input
          id="f-title"
          type="text"
          placeholder="例: ランチ"
          className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm focus:outline-2 focus:outline-blue-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleError && (
          <span className="text-xs text-red-700">{titleError}</span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="f-category" className="text-xs text-neutral-600">
            カテゴリ
          </label>
          <select
            id="f-category"
            className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm focus:outline-2 focus:outline-blue-700"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="f-amount" className="text-xs text-neutral-600">
            金額（円）
          </label>
          <input
            id="f-amount"
            type="number"
            min="1"
            placeholder="1200"
            className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm focus:outline-2 focus:outline-blue-700"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {amountError && (
            <span className="text-xs text-red-700">{amountError}</span>
          )}
        </div>
      </div>
      <div className="mt-2 flex flex-wrap justify-end gap-3">
        <button
          type="submit"
          className="inline-flex h-11 items-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white hover:bg-neutral-800"
        >
          追加
        </button>
      </div>
    </form>
  );
}
export default EntryForm;

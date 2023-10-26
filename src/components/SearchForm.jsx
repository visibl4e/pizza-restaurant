import { Form } from "react-router-dom";

export function SearchForm() {
  return (
    <Form method="get" className="formSearch">
      <div className="formRow">
        <label htmlFor="query"></label>
        <input type="search" name="query" id="query" placeholder="Search..." />
      </div>
    </Form>
  );
}

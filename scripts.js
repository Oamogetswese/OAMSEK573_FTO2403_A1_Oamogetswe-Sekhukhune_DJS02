const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (!dividend || !divider) {
      result.innerText = "Division not performed. Both values are required in inputs. Try again";
      return;
    }

    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Something critical went wrong. Please reload the page");
    }

    const dividendNumber = Number(dividend);
    const dividerNumber = Number(divider);

    if (dividerNumber === 0) {
      console.error(new Error("Division by zero error"));
      result.innerText = "Division not performed. Invalid number provided. Try again";
      return;
    }

    const divisionResult = dividendNumber / dividerNumber;
    result.innerText = Number.isInteger(divisionResult) ? divisionResult : Math.floor(divisionResult);
  } catch (error) {
    console.error(error);
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
  }
});
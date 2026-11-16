import { expect, test } from "vitest";
import { HttpResponse } from "msw";
import { CountriesWithDetailsDocument } from "../gql/graphql";
import { aCountry } from "../gql/mocks";
import { mockQuery } from "../test/mock";
import { renderWithApollo } from "../test/render";
import { api, worker } from "../test/worker";
import CountryListWithCards from "./CountryListWithCards.vue";

test("renders a card for every country in the response", async () => {
  worker.use(
    mockQuery(CountriesWithDetailsDocument, {
      countries: [
        aCountry({ code: "AT", name: "Austria" }),
        aCountry({ code: "DE", name: "Germany" }),
      ],
    })
  );

  const screen = await renderWithApollo(CountryListWithCards);

  await expect.element(screen.getByRole("heading", { name: "Austria" })).toBeVisible();
  await expect.element(screen.getByRole("heading", { name: "Germany" })).toBeVisible();
});

test("shows the error message when the API fails", async () => {
  worker.use(
    api.query(CountriesWithDetailsDocument, () =>
      HttpResponse.json({ errors: [{ message: "Countries are down" }] })
    )
  );

  const screen = await renderWithApollo(CountryListWithCards);

  await expect.element(screen.getByText("Countries are down")).toBeVisible();
});

import { expect, test } from "vitest";
import { render } from "vitest-browser-vue";
import { CountryCard_CountryFragmentFragmentDoc } from "../gql/graphql";
import { aCountry } from "../gql/mocks";
import { fragmentData } from "../test/mock";
import CountryCard from "./CountryCard.vue";

test("shows the country with its capital", async () => {
  const country = fragmentData(
    CountryCard_CountryFragmentFragmentDoc,
    aCountry({ name: "Austria", emoji: "🇦🇹", capital: "Vienna" })
  );

  const screen = await render(CountryCard, { props: { country } });

  await expect.element(screen.getByRole("heading", { name: "Austria" })).toBeVisible();
  await expect.element(screen.getByText("Vienna")).toBeVisible();
});

test("hides the capital row when the API returns null", async () => {
  const country = fragmentData(
    CountryCard_CountryFragmentFragmentDoc,
    aCountry({ name: "Antarctica", capital: null })
  );

  const screen = await render(CountryCard, { props: { country } });

  await expect.element(screen.getByRole("heading", { name: "Antarctica" })).toBeVisible();
  await expect.element(screen.getByText("Capital:")).not.toBeInTheDocument();
});

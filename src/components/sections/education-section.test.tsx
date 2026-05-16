import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { EducationSection } from "@/components/sections/education-section";
import { dictionary as ptDictionary } from "@/i18n/dictionaries/pt";
import { renderWithProviders } from "@/test/render";

describe("EducationSection", () => {
  it("renders education heading and anchors at #formacao", () => {
    renderWithProviders(<EducationSection education={ptDictionary.education} />);

    expect(
      screen.getByRole("heading", { level: 2, name: ptDictionary.education.title }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("education-section")).toHaveAttribute("id", "formacao");
    expect(screen.getByText(ptDictionary.education.items[0].degree)).toBeInTheDocument();
  });
});

import { Model, PrismaClient } from "@prisma/client";
import { it, vi, expect } from "vitest";

const exampleModel: Model = {
  id: "exampleId",
  name: "exampleName",
};
const createData = { name: "FormName" };
const expectedResult: Model = { ...exampleModel, ...createData };

const prisma = new PrismaClient();

vi.spyOn(prisma.model, "create").mockResolvedValue(expectedResult);

it("returns the supplied input data and the generated fields for successfully created Model entry", async () => {
  const result = await prisma.model.create({ data: createData });
  expect(result).toMatchObject(expectedResult);
});

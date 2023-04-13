import {defineConfig} from "sanity";
import {deskTool} from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "z9bvsk1v",
    dataset: "production",
    title: "Portfolio",
    apiVersion: "2023-04-12",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
});

export default config;
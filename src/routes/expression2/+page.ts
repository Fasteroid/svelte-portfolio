import { load as loadParent } from "../+layout";
import { defineData } from "$lib/pagedata"

export const load = defineData( loadParent, {
	title: "E2 Stuff",
	longTitle: "Expression 2"
} )
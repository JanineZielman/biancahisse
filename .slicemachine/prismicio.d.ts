// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/types";
import type * as prismicClient from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Home → Projects*
 */
export interface HomeDocumentDataProjectsItem {
	/**
	 * Project field in *Home → Projects*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home.projects[].project
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	project: prismic.ContentRelationshipField<"project">;
}

/**
 * Content for Home documents
 */
interface HomeDocumentData {
	/**
	 * Projects field in *Home*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home.projects[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	projects: prismic.GroupField<Simplify<HomeDocumentDataProjectsItem>>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *Menu → Menu Items*
 */
export interface MenuDocumentDataMenuItemsItem {
	/**
	 * Link field in *Menu → Menu Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: menu.menu_items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Content for Menu documents
 */
interface MenuDocumentData {
	/**
	 * Menu Items field in *Menu*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: menu.menu_items[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	menu_items: prismic.GroupField<Simplify<MenuDocumentDataMenuItemsItem>>;
}

/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<MenuDocumentData>, "menu", Lang>;

type PageDocumentDataSlicesSlice = ImageSlice | TextSlice | ListSlice | TextsSlice

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Project → Main Image*
 */
export interface ProjectDocumentDataMainImageItem {
	/**
	 * Image field in *Project → Main Image*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.main_image[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

type ProjectDocumentDataSlicesSlice = ImageSlice | TextSlice

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
	/**
	 * Title field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Year field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.year
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	year: prismic.KeyTextField;
	
	/**
	 * Date field in *Project*
	 *
	 * - **Field Type**: Date
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.date
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#date
	 */
	date: prismic.DateField;
	
	/**
	 * Background Color field in *Project*
	 *
	 * - **Field Type**: Color
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.background_color
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#color
	 */
	background_color: prismic.ColorField;
	
	/**
	 * White Text field in *Project*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: project.white_text
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	white_text: prismic.BooleanField;
	
	/**
	 * Cover Image field in *Project*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.cover_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	cover_image: prismic.ImageField<never>;
	
	/**
	 * Main Image field in *Project*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.main_image[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	main_image: prismic.GroupField<Simplify<ProjectDocumentDataMainImageItem>>;
	
	/**
	 * Slice Zone field in *Project*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice>;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Site Title field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.site_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	site_title: prismic.KeyTextField;
	
	/**
	 * Site Description field in *Settings*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.site_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	site_description: prismic.RichTextField;
	
	/**
	 * Image field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Background Color field in *Settings*
	 *
	 * - **Field Type**: Color
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.background_color
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#color
	 */
	background_color: prismic.ColorField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;

/**
 * Item in *Works → Projects*
 */
export interface WorksDocumentDataProjectsItem {
	/**
	 * Project field in *Works → Projects*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: works.projects[].project
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	project: prismic.ContentRelationshipField<"project">;
}

/**
 * Content for Works documents
 */
interface WorksDocumentData {
	/**
	 * Title field in *Works*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: works.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Projects field in *Works*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: works.projects[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	projects: prismic.GroupField<Simplify<WorksDocumentDataProjectsItem>>;
}

/**
 * Works document from Prismic
 *
 * - **API ID**: `works`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorksDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<WorksDocumentData>, "works", Lang>;

export type AllDocumentTypes = HomeDocument | MenuDocument | PageDocument | ProjectDocument | SettingsDocument | WorksDocument;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceDefaultPrimary {
	/**
	 * Image field in *Image → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Size field in *Image → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.primary.size
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	size: prismic.SelectField<"small-33" | "medium-50" | "large-100">;
	
	/**
	 * Caption field in *Image → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.primary.caption
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	caption: prismic.RichTextField;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<"default", Simplify<ImageSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Primary content in *List → Primary*
 */
export interface ListSliceDefaultPrimary {
	/**
	 * Title field in *List → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: list.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
}

/**
 * Primary content in *List → Items*
 */
export interface ListSliceDefaultItem {
	/**
	 * Text field in *List → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: list.items[].text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	text: prismic.KeyTextField;
	
	/**
	 * Link field in *List → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: list.items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
	
	/**
	 * Year field in *List → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: list.items[].year
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	year: prismic.KeyTextField;
}

/**
 * Default variation for List Slice
 *
 * - **API ID**: `default`
 * - **Description**: List
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListSliceDefault = prismic.SharedSliceVariation<"default", Simplify<ListSliceDefaultPrimary>, Simplify<ListSliceDefaultItem>>;

/**
 * Slice variation for *List*
 */
type ListSliceVariation = ListSliceDefault

/**
 * List Shared Slice
 *
 * - **API ID**: `list`
 * - **Description**: List
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListSlice = prismic.SharedSlice<"list", ListSliceVariation>;

/**
 * Primary content in *Text → Primary*
 */
export interface TextSliceDefaultPrimary {
	/**
	 * Text field in *Text → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<"default", Simplify<TextSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

/**
 * Primary content in *Texts → Items*
 */
export interface TextsSliceDefaultItem {
	/**
	 * Title field in *Texts → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: texts.items[].title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Subtitle field in *Texts → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: texts.items[].subtitle
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	subtitle: prismic.KeyTextField;
	
	/**
	 * Year field in *Texts → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: texts.items[].year
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	year: prismic.KeyTextField;
	
	/**
	 * Link field in *Texts → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: texts.items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Default variation for Texts Slice
 *
 * - **API ID**: `default`
 * - **Description**: Texts
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextsSliceDefault = prismic.SharedSliceVariation<"default", Record<string, never>, Simplify<TextsSliceDefaultItem>>;

/**
 * Slice variation for *Texts*
 */
type TextsSliceVariation = TextsSliceDefault

/**
 * Texts Shared Slice
 *
 * - **API ID**: `texts`
 * - **Description**: Texts
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextsSlice = prismic.SharedSlice<"texts", TextsSliceVariation>;

declare module "@prismicio/client" {
	interface CreateClient {
		(repositoryNameOrEndpoint: string, options?: prismicClient.ClientConfig): prismicClient.Client<AllDocumentTypes>;
	}
	
	namespace Content {
		export type {
			HomeDocument,
			HomeDocumentData,
			HomeDocumentDataProjectsItem,
			MenuDocument,
			MenuDocumentData,
			MenuDocumentDataMenuItemsItem,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			ProjectDocument,
			ProjectDocumentData,
			ProjectDocumentDataMainImageItem,
			ProjectDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			WorksDocument,
			WorksDocumentData,
			WorksDocumentDataProjectsItem,
			AllDocumentTypes,
			ImageSlice,
			ImageSliceDefaultPrimary,
			ImageSliceVariation,
			ImageSliceDefault,
			ListSlice,
			ListSliceDefaultPrimary,
			ListSliceDefaultItem,
			ListSliceVariation,
			ListSliceDefault,
			TextSlice,
			TextSliceDefaultPrimary,
			TextSliceVariation,
			TextSliceDefault,
			TextsSlice,
			TextsSliceDefaultItem,
			TextsSliceVariation,
			TextsSliceDefault
		}
	}
}
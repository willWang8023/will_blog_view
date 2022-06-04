import store from "@/store"

export default function getPageTitle(pageTitle) {
	// const title = store.state.siteInfo.webTitleSuffix
	const title = "willWang`s blog"

	if (pageTitle) {
		if (title) {
			return `${pageTitle}${title}`
		}
		return pageTitle
	}
	return title
}

<script lang="ts">
    import { page } from "$app/stores";
    import { base } from "$app/paths";
    import { pagetree } from "$lib/pagetree";
    import BackgroundTitle from "../titlebar/BackgroundTitle.svelte";
    import type { FullPageData } from "$lib/pagedata";

    export let topic: string;
    
    $: pageData = $page.data as FullPageData; // needed for type safety
    
    function sanitizeThumbnail(thumb: string | undefined): string {
        return `assets/${thumb ? `${topic}/${thumb}` : "placeholder.png"}`
    }
</script>

<style lang="scss" >
    @import "./projectcollection.scss";
</style>

<div class="margins">
    <section>
        <BackgroundTitle title={(pageData.longTitle || pageData.title) + " Projects"} background='{base}/assets/{topic}/banner.jpg'/>
        <section class="no-background">
            <div class="project-shelf">
                <slot style='color: red;'></slot>
                {#each pagetree.getChildrenAtPath(`/${topic}`) as node}
                    <a href="{node.webPath}">
                        <img src="{ sanitizeThumbnail(node.pageData?.thumbnail) }" alt="thumbnail">
                        <div class="project-title">{ node.pageData?.longTitle || node.pageData?.title }</div>
                    </a>
                {/each}
            </div>
        </section>
    </section>
</div>

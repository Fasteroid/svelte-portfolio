import { l as load$1 } from "../chunks/_layout.4fab37f4.js";
import { d as defineData } from "../chunks/pagedata.f846d81a.js";
import { s as safe_not_equal, n as noop } from "../chunks/scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, h as claim_element, x as get_svelte_dataset, a as insert_hydration, f as detach } from "../chunks/index.79817a2c.js";
import { b as base } from "../chunks/paths.3a89d34e.js";
const load = defineData(load$1, {
  title: "About"
});
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
function create_fragment(ctx) {
  let body;
  let textContent = `<div class="margins"><section><hgroup><h1>About Me</h1></hgroup> <div class="p"><img src="${base}/assets/aboutme/fasteroidbruh.jpg" style="float:left; max-height: 245px; margin-left: 0px;" alt="A 3D-printed replica Expression 2 chip from Garry&#39;s Mod."/>
                Hi, I&#39;m Fasteroid!  Nice to meet you!<br/> <br/>
                I&#39;m a recent Computer Science graduate from <a href="https://www.wilmu.edu/">Wilmington University</a>.  
                I&#39;m currently looking work as a programmer, developer, or designer of computer related doohickeys.  I&#39;m also
                looking for a special someone who will tolerate loving the socially-awkward goofball I am.  I spoil you, you spoil me, ya know?<br/> <br/>
                I began writing my first original lines of code early to mid 2014, in a little-known language
                called Expression 2 from the popular sandbox game <i>Garry&#39;s Mod</i>.  Expression had a very steep learning 
                curve to it at first due to its obscurity and narrow scope of applications, but by 2015 it had turned
                into a massive power trip for me.  I&#39;m still addicted today.
                <div style="clear:both"></div></div> <div class="p"><img src="${base}/assets/aboutme/ody.jpg" style="float:right; max-height: 245px; margin-right: 0px;" alt="2018 claiming of the Renatra Fusca Creativity Award at DE State Finals."/>
                My favorite experiences so far in life have been my adventures during Odyssey of the Mind, which is a 
                collaborative problem-solving extracurricular for creative thinkers.  Each year, teams of 5-7 choose
                one of five long-term problems (which all involve some combination of acting and engineering),
                and are assigned an 8-minute &#39;spontaneous&#39; problem the day of the performance.<br/> <br/>
                With the help of my father as the team coach (who&#39;s just there to organize and keep us on track), 
                and my wonderful teammates, 
                we managed to be World Finalists four times in a row from 2016 to 2019, with a second place
                victory for Problem 2 Division III in 2019 (<a href="https://www.odysseyofthemind.com/wf2019/world-finals-2019-scores">scores here</a>).<br/> <br/>
                Odyssey of the Mind taught me a lot<span class="emdash">—</span>mainly that it usually isn&#39;t feasable for one person to work on everything.  
                Different people have different strengths and weaknesses, and if one person does everything, they&#39;re bound to hit 
                a weakness eventually.  In contrast, with good teamwork and good skill coverage, even an intelligent adversary
                will struggle to pick something that truly defeats everyone on the team.
                <div style="clear:both"></div></div> <div class="p"><img src="${base}/assets/aboutme/gmodfriends.jpg" style="float:left; max-height: 245px; margin-left: 0px;" alt="Friends on E2 Beyond Infinity."/>
                I currently spend my days managing my two Garry&#39;s Mod servers, <i>E2 Beyond Infinity</i> and <i>Props Beyond Infinity</i>.  
                One is a programming and scripting paradise with a small but devoted playerbase, and the other is a prop hunt server that
                has yet to see itself full.<br/> <br/>
                One of the coolest features of both these servers is the presence of a bidirectional Discord Relay I designed, which allows seamless two-way 
                interaction between players on the Garry&#39;s Mod server and users in its Discord server.  This relay has proved to serve
                many practical applications, ranging from posting memes in the in-game chat to running commands remotely from up to 8,000 miles away.  
                It&#39;s not a unique idea by any means, but it&#39;s 100% my unique implementation.  It&#39;s old, but I&#39;m still proud of it.<br/> <br/>
                In 2021 or 2022 (I forget exactly when), I had acquired enough money via server donations to purchase a new dedicated machine for the server.  
                This machine runs Linux instead of Windows, and server performance has been significantly better ever since this change.  Most E2 scripts 
                (which run serverside) run with half the CPU time they used to use.
                The server also tolerates the other crap we put it through a lot better now, such as spawning hundreds of physics entities in confined spaces.  
                Some people say my server is dead, but I&#39;m four years in and still occasionally get new players.  I think it&#39;s been a success.<br/> <div style="clear:both"></div>
                That&#39;s the end of my TL;DR.<br/>
                If I&#39;ve piqued your interest at all, you should check out my <a href="https://fasteroid.github.io/skilltree.html">technical skill tree</a> and learn more about what I can do.  
                Perhaps I can be of use to you!<br/></div> <span class="emdash">—</span>Fast<br/> <br/>
            PS: SVELTE! SVELTE! SVELTE!</section></div>`;
  return {
    c() {
      body = element("body");
      body.innerHTML = textContent;
    },
    l(nodes) {
      body = claim_element(nodes, "BODY", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(body) !== "svelte-j8wcge")
        body.innerHTML = textContent;
    },
    m(target, anchor) {
      insert_hydration(target, body, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(body);
      }
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component,
  _page as universal
};

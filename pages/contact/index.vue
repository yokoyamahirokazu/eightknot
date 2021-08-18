<template>
  <div>
    <section>
      <div class="section_inner">
        <div class="content_flex">
          <div class="content_flex_left">
            <div class="headline_box">
              <h1 class="headline">
                <SVGElement name="contact" />
                <span class="headline_txt">Contact</span>
              </h1>
              <p class="sub_headline">
                To Contact Us,<br />Please Fill in This Form
              </p>
            </div>
          </div>
          <div class="content_flex_right">
            <div class="content_box_wrapper">
              <h2 class="headline_2">Contact Form</h2>
              <div class="content_box"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SVGElement from "@/components/svgs.vue";

export default {
  layout: "lower",

  components: {
    SVGElement,
  },
};
</script>

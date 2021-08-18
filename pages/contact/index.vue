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
              <div class="content_box">
                <template v-if="!finished">
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    @submit.prevent
                  >
                    <p>
                      <label>
                        お名前:
                        <input v-model="form.name" type="text" name="name" />
                      </label>
                    </p>
                    <p>
                      <label>
                        メールアドレス:
                        <input v-model="form.email" type="email" name="email" />
                      </label>
                    </p>
                    <p>
                      <label>
                        お問い合わせ内容:
                        <textarea
                          id="form-content"
                          v-model="form.content"
                          name="content"
                        />
                      </label>
                    </p>
                    <p>
                      <button @click="handleSubmit" v-text="'送信'" />
                    </p>
                  </form>
                </template>
                <template v-else>
                  <p v-text="'お問い合わせ頂きありがとうございました。'" />
                  <p><nuxt-link to="/" v-text="'TOPへ'" /></p>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SVGElement from "@/components/svgs.vue";
import axios from "axios";

export default {
  layout: "lower",

  components: {
    SVGElement,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        content: "",
      },
      finished: false,
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      axios
        .post(
          "/",
          this.encode({
            "form-name": "contact",
            ...this.form,
          }),
          axiosConfig
        )
        .then(() => {
          this.finished = true;
        });
    },
  },
};
</script>

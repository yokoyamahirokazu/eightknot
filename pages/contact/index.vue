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
                <form
                  class="p-contact__form"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  @submit.prevent="onSubmit"
                  :class="sendingClass"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div class="p-contact__item">
                    <label for="username">お名前</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      v-model="username"
                      autocomplete="name"
                    />
                  </div>
                  <!-- /.p-contact__item -->

                  <div class="p-contact__item">
                    <label for="katakana">フリガナ</label>
                    <input
                      type="text"
                      id="katakana"
                      name="katakana"
                      v-model="katakana"
                    />
                  </div>
                  <!-- /.p-contact__item -->

                  <div class="p-contact__item">
                    <label for="useremail">メールアドレス</label>
                    <input
                      type="text"
                      id="useremail"
                      name="useremail"
                      v-model="useremail"
                      autocomplete="email"
                    />
                  </div>
                  <!-- /.p-contact__item -->

                  <div class="p-contact__item">
                    <label for="message">お問い合わせ内容</label>
                    <textarea
                      id="message"
                      name="message"
                      v-model="message"
                    ></textarea>
                  </div>
                  <!-- /.p-contact__item -->

                  <div class="p-contact__item" v-show="false">
                    <label for="message">スパムでない場合は空欄</label>
                    <input type="text" name="bot-field" v-model="botField" />
                  </div>
                  <!-- /.p-contact__item -->

                  <div class="p-contact__submit">
                    <button type="submit">送信</button>
                  </div>
                  <!-- /.p-contact__submit -->
                </form>
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

export default {
  layout: "lower",

  components: {
    SVGElement,
  },
};
</script>

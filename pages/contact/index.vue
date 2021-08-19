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
            <template v-if="!finished">
              <div class="content_box_wrapper">
                <h2 class="headline_2">Contact Form</h2>

                <div class="content_box">
                  <p>
                    当社へのお問い合わせ、メッセージはこちらからお願いいたします。<br />
                    営業時間、休業日などの都合により、回答までにお時間を頂く場合があります。<br />
                    ※お問い合わせの内容によっては、回答できない場合や回答にお時間がかかる場合がありますのでご了承ください。<br />
                    <span class="error">*必須</span>
                  </p>
                  <div class="contact_form">
                    <validation-observer
                      ref="observer"
                      v-slot="{ invalid, validated }"
                      tag="form"
                    >
                      <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        @submit.prevent
                      >
                        <div class="contact_form_block">
                          <label
                            >メールアドレス<span class="required"
                              >*</span
                            ></label
                          >
                          <validation-provider
                            v-slot="{ errors }"
                            rules="required|email|max:256"
                            name="メールアドレス"
                          >
                            <input
                              v-model="form.email"
                              type="email"
                              name="email"
                              placeholder="メールアドレス"
                            />
                            <p v-show="errors.length" class="p-contact__error">
                              {{ errors[0] }}
                            </p>
                          </validation-provider>
                        </div>
                        <div class="contact_form_block">
                          <label>お名前<span class="required">*</span></label>
                          <validation-provider
                            v-slot="{ errors }"
                            rules="required|max:100"
                            name="お名前"
                          >
                            <input
                              v-model="form.name"
                              type="text"
                              name="name"
                              placeholder="回答を入力"
                            />
                            <p v-show="errors.length" class="p-contact__error">
                              {{ errors[0] }}
                            </p>
                          </validation-provider>
                        </div>
                        <div class="contact_form_block">
                          <label
                            >会社・団体名<span
                              >ご所属組織のない場合、「個人」とご記入ください。</span
                            ></label
                          >
                          <input
                            v-model="form.company"
                            type="text"
                            name="company"
                            placeholder="回答を入力"
                          />
                        </div>
                        <div class="contact_form_block">
                          <label>電話番号</label>
                          <input
                            v-model="form.tel"
                            type="text"
                            name="tel"
                            placeholder="回答を入力"
                          />
                        </div>
                        <div class="contact_form_block">
                          <label
                            >お問い合わせ内容<span class="required"
                              >*</span
                            ></label
                          >

                          <label class="radio" for="contacttype_1">
                            <input
                              v-model="form.contacttype"
                              type="radio"
                              name="contacttype"
                              value="見積依頼"
                              id="contacttype_1"
                            />
                            見積依頼
                          </label>

                          <label class="radio" for="contacttype_2">
                            <input
                              v-model="form.contacttype"
                              type="radio"
                              name="contacttype"
                              value="取材依頼"
                              id="contacttype_2"
                            />
                            取材依頼
                          </label>
                          <label class="radio" for="contacttype_3">
                            <input
                              v-model="form.contacttype"
                              type="radio"
                              name="contacttype"
                              value="求人へのご応募"
                              id="contacttype_3"
                            />
                            求人へのご応募
                          </label>

                          <div class="typeother">
                            <label class="radio" for="contacttype_4">
                              <input
                                v-model="form.contacttype"
                                type="radio"
                                name="contacttype"
                                value="その他"
                                id="contacttype_4"
                              />
                              その他
                            </label>
                            <input
                              v-model="form.typeother"
                              type="text"
                              name="typeother"
                            />
                          </div>
                        </div>

                        <div class="contact_form_block">
                          <label
                            >お問い合わせ詳細<span class="required"
                              >*</span
                            ></label
                          >
                          <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                            name="お問い合わせ詳細"
                          >
                            <textarea
                              id="form-content"
                              v-model="form.content"
                              name="content"
                              placeholder="回答を入力"
                            />
                            <p v-show="errors.length" class="p-contact__error">
                              {{ errors[0] }}
                            </p>
                          </validation-provider>
                        </div>
                        <p>
                          <button
                            class="btn"
                            @click="handleSubmit"
                            v-text="'送信する'"
                            :disabled="invalid || !validated"
                          />
                        </p>
                      </form>
                    </validation-observer>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="content_box_wrapper">
                <h2 class="headline_2">Thank You</h2>

                <div class="content_box">
                  <p v-text="'お問い合わせ頂きありがとうございました。'" />
                  <p><nuxt-link class="btn" to="/" v-text="'TOPへ'" /></p>
                </div>
              </div>
            </template>
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
        tel: "",
        company: "",
        contacttype: "",
        typeother: "",
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

<template>
  <ValidationObserver ref="observer">
    <b-form slot-scope="{ validate }" @submit.prevent="validate().then(handleSubmit)">
      <ValidationProvider rules="required" name="Name">
        <b-form-group slot-scope="{ valid, errors }" label="Name">
          <b-form-input
            type="text"
            v-model="user.name"
            :state="errors[0] ? false : (valid ? true : null)"
            placeholder="Enter name">
          </b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider rules="required" name="Password" vid="password">
        <b-form-group slot-scope="{ valid, errors }" label="Password">
          <b-form-input
            type="password"
            v-model="user.password"
            :state="errors[0] ? false : (valid ? true : null)"
            placeholder="Enter password">
          </b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <b-button block type="submit" variant="primary">Submit</b-button>
    </b-form>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    user: {
      name: '',
      password: ''
    }
  }),
  methods: {
    handleSubmit () {
      console.log(this.user);
      this.$store.dispatch("auth_sign_in", {
              username: this.user.username,
              password: this.user.password
            })
    }
  }
};
</script>
<style>
  form {
    max-width: 500px;
    margin: 0 auto;
    text-align: left;
  }
  .form-group > label {
      font-weight: 600;
  }
</style>

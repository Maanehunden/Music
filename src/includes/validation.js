import { Form as VeeForm,
        Field as VeeField,
        defineRule, ErrorMessage} from "vee-validate";
import { required ,
        confirmed,
        min,
        max,
         alpha_spaces as alphaSpaces,
         email ,
         not_one_of as excluded,
          min_value as minValue} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alphaSpaces", alphaSpaces);
    defineRule("email", email);
    defineRule("required", required);
    defineRule("confirmed", confirmed);
    defineRule("excluded", excluded);
  },
}

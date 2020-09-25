<template>
  <div class="container">
    <c-modal :is-open="isOpenLocal">
      <c-modal-content ref="content">
        <c-modal-header>
          <slot name="header">
            Modal Title
          </slot>
        </c-modal-header>
        <c-modal-close-button @click="isOpenLocal = !isOpenLocal" />
        <c-modal-body>
          <slot name="body">
            Modal Body
          </slot>
        </c-modal-body>
        <c-modal-footer justifyContent="space-between">
          <slot name="footer">
            <c-button @click="isOpenLocal = !isOpenLocal">Cancel</c-button>
            <c-button variant-color="blue" mr="3">
              Save
            </c-button>
          </slot>
        </c-modal-footer>
      </c-modal-content>
      <c-modal-overlay />
    </c-modal>
  </div>
</template>
<script>
import {
  CSpacer,
  CModal,
  CButton,
  CModalContent,
  CModalOverlay,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
} from "@chakra-ui/vue";

export default {
  name: "Modal",
  props: {
    value: Boolean
  },
  computed: {
    isOpenLocal: {
      get() {
        return this.value;
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  components: {
    CModal,
    CButton,
    CModalContent,
    CModalOverlay,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
  },
};
</script>

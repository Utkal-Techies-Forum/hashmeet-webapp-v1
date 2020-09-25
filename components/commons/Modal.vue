<template>
  <div class="container">
  <c-modal-content ref="content">
        <c-modal-header>Modal Title</c-modal-header>
        <c-modal-close-button />
        <c-modal-body>
         
        </c-modal-body>
        <c-modal-footer>
          <c-button variant-color="blue" mr="3">
            Save
          </c-button>
          <c-button @click="close">Cancel</c-button>
        </c-modal-footer>
      </c-modal-content>
      <c-modal-overlay />
    </c-modal>
  </div>
</template>
<script>
import {
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

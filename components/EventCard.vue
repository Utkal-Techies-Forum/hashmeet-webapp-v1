<template>
  <c-box maxW="sm" border-width="1px" rounded="lg" overflow="hidden">
    <c-image :src="event.imageUrl" :alt="event.imageAlt" />
    <c-box p="6">
      <c-box d="flex" align-items="baseline" justifyContent="space-between">
        <c-text>{{ event.date }}</c-text>
        <div>
          <c-icon name="heart" mr="2"></c-icon>
          <c-icon name="share-square"></c-icon>
        </div>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
import {
  CBox,
  CIcon,
  // CStack,
  // CButton,
  // CIconButton,
  // CFlex,
  // CHeading,
  CImage,
  CText,
  // CFormControl,
  // CFormLabel,
  // CInput,
  // CInputGroup,
  // CInputRightElement,
} from '@chakra-ui/vue'

export default {
  name: 'EventCard',
  components: {
    CBox,
    CIcon,
    // CStack,
    // CButton,
    // CIconButton,
    // CFlex,
    // CHeading,
    CImage,
    CText,
    // CFormControl,
    // CFormLabel,
    // CInput,
    // CInputGroup,
    // CInputRightElement,
  },
  data() {
    return {
      event: {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        title: "Going Serverless with Azure",
        date: "FRI OCT 20, 9AM IST",
      }
    };
  }
}
</script>

<style>

</style>
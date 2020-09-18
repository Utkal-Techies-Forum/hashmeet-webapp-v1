<template>
  <div class="container">
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CHeading text-align="center" mb="4"> ⚡️ Hello chakra-ui/vue </CHeading>
      <CFlex justify="center" direction="column" align="center">
        <CBox mb="3">
          <CIconButton
            mr="3"
            :icon="colorMode === 'light' ? 'moon' : 'sun'"
            :aria-label="`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`"
            @click="toggleColorMode"
          />
          <CButton left-icon="info" variant-color="blue" @click="showToast">
            Show Toast
          </CButton>
        </CBox>
        <CAvatarGroup>
          <CAvatar
            name="Evan You"
            alt="Evan You"
            src="https://pbs.twimg.com/profile_images/1206997998900850688/cTXTQiHm_400x400.jpg"
          >
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar
            name="Jonathan Bakebwa"
            alt="Jonathan Bakebwa"
            src="https://res.cloudinary.com/xtellar/image/upload/v1572857445/me_zqos4e.jpg"
          >
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar
            name="Segun Adebayo"
            alt="Segun Adebayo"
            src="https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg"
          >
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar src="pop">
            <CAvatarBadge size="1.0em" border-color="papayawhip" bg="tomato" />
          </CAvatar>
        </CAvatarGroup>
        <CButton variant-color="blue" mt="3" @click="showModal = true">
          Register
        </CButton>

        <CModal :is-open="showModal">
          <CModalOverlay />
          <CModalContent d="flex" alignItems="center" justifyContent="center">
            <CModalHeader>Welcome</CModalHeader>
            <CModalBody>Great Decision!</CModalBody>
            <CImage
              m="0.4em"
              w="168px"
              h="186px"
              src="/welcome.png"
              alt="welcome"
            />

            <CBox align="center" m="2em">
              <CHeading as="h4" size="md">Sign up as Attendee</CHeading>

              <CButton variant-color="blue" size="md"> Register </CButton>
            </CBox>

            <CText>Or</CText>

            <CBox align="center" m="2em">
              <CHeading as="h4" size="md">Sign up as Speaker</CHeading>

              <CButton variant-color="blue" size="md"> Register </CButton>
            </CBox>

            <CModalFooter> </CModalFooter>
            <CModalCloseButton @click="showModal = false" />
          </CModalContent>
        </CModal>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CButton,
  CAvatarGroup,
  CAvatar,
  CAvatarBadge,
  CModal,
  CModalContent,
  CModalOverlay,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
  CIconButton,
  CFlex,
  CHeading,
  CImage,
  CText
} from '@chakra-ui/vue'

export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CButton,
    CAvatarGroup,
    CAvatar,
    CAvatarBadge,
    CModal,
    CModalContent,
    CModalOverlay,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CIconButton,
    CFlex,
    CHeading,
    CImage,
    CText
  },
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    }
  }
}
</script>

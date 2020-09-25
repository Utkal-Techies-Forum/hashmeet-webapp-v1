<template>
  <div class="container">
    <CBox
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CHeading text-align="center" mb="4">
        ⚡️ Hello. Welcome to UTF.
      </CHeading>
      <CFlex justify="center" direction="column" align="center">
        <CButton
          variant-color="blue"
          mt="3"
          @click="
            showModal = true;
            step = 0;
          "
        >
          Register
        </CButton>

        <Modal v-model="showModal">
          <c-box slot="header">Welcome</c-box>
          <div slot="body">
            <div v-if="step === 0">
              <c-flex
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
              >
                Great Decision!
                <c-image src="/welcome.png" alt="welcome" />
                <c-stack align="center">
                  <CHeading as="h4" size="md">Sign up as Attendee</CHeading>
                  <c-button variant-color="blue" size="md" @click="step = 1">
                    Register
                  </c-button>
                  <c-text>Or</c-text>
                  <c-heading as="h4" size="md">Sign up as Speaker</c-heading>
                  <c-button variant-color="blue" size="md" @click="step = 1">
                    Register
                  </c-button>
                </c-stack>
              </c-flex>
            </div>

            <div v-if="step === 1">
              <c-flex
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
              >
                Looks like you are not a member yet.
                <c-stack align="center">
                  <c-heading as="h1" size="lg">Let's get started!</c-heading>
                  <c-image src="/welcome.png" alt="welcome" />
                </c-stack>
              </c-flex>
            </div>
          </div>
          <div slot="footer">
            <c-box v-if="step == 1">
              <CButton variant-color="blue" size="md" @click="step = 0">
                Back
              </CButton>
              <CButton variant-color="blue" size="md"> Continue </CButton>
            </c-box>
          </div>
        </Modal>

        <!-- <CModal :is-open="showModal">
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

              <CButton
                variant-color="blue"
                size="md"
                @click="showGetStartedModal = true"
              >
                Register
              </CButton>
            </CBox>

            <CText>Or</CText>

            <CBox align="center" m="2em">
              <CHeading as="h4" size="md">Sign up as Speaker</CHeading>

              <CButton
                variant-color="blue"
                size="md"
                @click="showGetStartedModal = true"
              >
                Register
              </CButton>
            </CBox>

            <CModalFooter> </CModalFooter>
            <CModalCloseButton @click="showModal = false" />
          </CModalContent>
        </CModal> -->

        <CModal :is-open="showGetStartedModal">
          <CModalOverlay />
          <CModalContent d="flex" alignItems="center" justifyContent="center">
            <CModalHeader></CModalHeader>
            <CModalBody>Looks like you are not a member yet.</CModalBody>
            <CHeading as="h1" size="lg">Let's get started!</CHeading>

            <CImage
              m="0.4em"
              w="168px"
              h="186px"
              src="/welcome.png"
              alt="welcome"
            />

            <CButton
              variant-color="blue"
              size="md"
              @click="
                showModal = false;
                showGetStartedModal = false;
                registerFormModal = true;
              "
            >
              Continue
            </CButton>

            <CModalFooter> </CModalFooter>
            <CModalCloseButton @click="showGetStartedModal = false" />
          </CModalContent>
        </CModal>

        <CModal :is-open="registerFormModal" :on-close="close">
          <CModalOverlay />
          <CModalContent d="flex" justifyContent="center">
            <CModalHeader></CModalHeader>
            <CHeading as="h1" size="lg" align="center"
              >Let's fill this form.</CHeading
            >

            <!-- <CBox m="2em">
              <CFormControl>
                <CFormLabel>Name</CFormLabel>
                <CInput ref="initialRef" placeholder="Name" />
              </CFormControl>

              <CFormControl mt="4">
                <CFormLabel>Email</CFormLabel>
                <CInput placeholder="Email" />
              </CFormControl>

              <CFormControl mt="4">
                <CFormLabel>Password</CFormLabel>
                <CInput
                  placeholder="Password"
                  :type="show ? 'text' : 'password'"
                  VModel="password"
                />
              </CFormControl>

              <CFormControl mt="4">
                <CFormLabel>Confirm Password</CFormLabel>
                <CInput
                  placeholder="Confirm Password"
                  :type="show ? 'text' : 'password'"
                  VModel="confirmpassword"
                />
              </CFormControl>
            </CBox> -->

            <CButton
              variant-color="blue"
              size="md"
              w="100px"
              ml="20em"
              @click="
                showModal = false;
                showGetStartedModal = false;
                registerFormModal = true;
              "
            >
              Continue
            </CButton>

            <CModalFooter> </CModalFooter>
            <CModalCloseButton @click="showGetStartedModal = false" />
          </CModalContent>
        </CModal>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
//import RepositoryFactoryV2 from '../../repositories/RepositoryFactory'
//const Users = RepositoryFactoryV2.get('users')

import Modal from '../components/commons/Modal.vue';

import {
  CBox,
  CStack,
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
  CText,
  CFormControl,
  CFormLabel,
  CInput
} from '@chakra-ui/vue'

export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    Modal,
    CBox,
    CStack,
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
    CText,
    CFormControl,
    CFormLabel,
    CInput
  },
  data () {
    return {
      step: -1,
      showModal: false,
      showGetStartedModal: false,
      registerFormModal: false,
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
    },
     open() {
      this.isOpen = true
    },
     close() {
      this.isOpen = false
    }
  }
}
</script>

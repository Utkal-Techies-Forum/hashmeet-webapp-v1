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
          variant-color="blue" mt="3" @click=" showModal = true; step = 0;">
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
            <div v-if="step === 2">
              <CBox m="2em">
                <CFormControl>
                  <CFormLabel>Name</CFormLabel>
                  <CInput ref="initialRef" placeholder="Name" />
                </CFormControl>

                <CFormControl mt="4">
                  <CFormLabel>Email</CFormLabel>
                  <CInput v-model="email" placeholder="Email" />
                </CFormControl>

                <CFormControl mt="4">
                  <CFormLabel>Password</CFormLabel>
                  <CInputGroup size="md">
                    <CInput
                      v-model="password"
                      placeholder="Password"
                      :type="showPassword ? 'text' : 'password'"
                    />
                    <CInputRightElement>
                      <c-icon-button
                        @click="showPassword = !showPassword"
                        size="sm"
                        aria-label="Show/Hide Password"
                        :icon="showPassword ? 'eye-slash': 'eye'"/>
                    </CInputRightElement>
                  </CInputGroup>
                </CFormControl>

                <CFormControl mt="4">
                  <CFormLabel>Confirm Password</CFormLabel>
                  <CInputGroup size="md">
                    <CInput
                      v-model="confirmpassword"
                      placeholder="Confirm Password"
                      :type="showConfirmPassword ? 'text' : 'password'"
                    />
                    <CInputRightElement>
                      <c-icon-button
                        @click="showConfirmPassword = !showConfirmPassword"
                        size="sm"
                        aria-label="Show/Hide Password"
                        :icon="showConfirmPassword ? 'eye-slash': 'eye'"/>
                    </CInputRightElement>
                  </CInputGroup>
                </CFormControl>
              </CBox>
            </div>
          </div>
          <div slot="footer">
            <c-box v-if="step == 1">
              <CButton variant-color="blue" size="md" @click="step = 0">
                Back
              </CButton>
              <CButton variant-color="blue" size="md" @click="step++"> Continue </CButton>
            </c-box>
            <c-box v-if="step == 2">
              <c-button variant-color="blue" size="md" @click="registerUser">
                    Register
                </c-button>
            </c-box>
          </div>
        </Modal>
      </CFlex>

      <c-box mx="auto" mt="5">
        <event-card></event-card>
      </c-box>
    </CBox>
  </div>
</template>

<script lang="js">
import { mapState } from 'vuex'
import Modal from '../components/commons/Modal.vue';
import EventCard from '../components/EventCard.vue';

import {
  CBox,
  CStack,
  CButton,
  CIconButton,
  CFlex,
  CHeading,
  CImage,
  CText,
  CFormControl,
  CFormLabel,
  CInput,
  CInputGroup,
  CInputRightElement,
} from '@chakra-ui/vue'

export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    EventCard,
    Modal,
    CBox,
    CStack,
    CButton,
    CIconButton,
    CFlex,
    CHeading,
    CImage,
    CText,
    CFormControl,
    CFormLabel,
    CInput,
    CInputGroup,
    CInputRightElement,
  },
  data () {
    return {
      email: '',
      password: '',
      confirmpassword: '',
      showPassword: false,
      showConfirmPassword: false,
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
    async registerUser() {
      // Normal validation.
      if(!this.email || !this.password) return;

      // Let's create the user.
      await this.$store.dispatch('user/create_user', {
        email: this.email,
        password: this.password
      })
    },
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

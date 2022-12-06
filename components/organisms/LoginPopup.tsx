import { Dialog, Transition } from '@headlessui/react'
import { useTranslation, UseTranslation } from 'next-i18next'
import { useState } from 'react'
import classNames from 'classnames'

import Modal from 'components/atoms/Modal'
import { login } from 'features/users/users.slice'
import { useAppDispatch } from 'hooks/redux'
import Input from 'components/atoms/Input'
import Label from 'components/atoms/Label'
import Form from 'components/atoms/Form'

const LoginPopup = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const startLogin = () => {
    dispatch(login({ email }))
  }

  const submitDisabled = !email || !password

  return (
    <Modal open onClose={() => {}}>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
        >
          {t('Sign in to Framestore social feed')}
        </Dialog.Title>
        <Form onSubmit={startLogin}>
          <div className="mt-8 text-left">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input.Email
                  id="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="john.wick@gmail.com"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input.Password
                  id="password"
                  value={password}
                  onChange={setPassword}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-8">
            <button
              type="button"
              className={classNames(
                'inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 sm:text-sm',
                {
                  'opacity-50 cursor-not-allowed': submitDisabled,
                  'hover:bg-indigo-700': !submitDisabled,
                }
              )}
              onClick={startLogin}
              disabled={submitDisabled}
            >
              {t('Sign in')}
            </button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}

export default LoginPopup

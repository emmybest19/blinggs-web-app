import { useLocation } from 'react-router-dom'

import { DEMO_ACCESS } from '../api/auth'
import { partnerLinks } from '../data/partner.data'
import { portalCopy } from '../data/portal.data'
import { usePartnerSignIn } from '../hooks/usePartnerSignIn'
import {
  ERROR,
  FIELD,
  FIELD_BAD,
  FIELD_OK,
  LABEL,
  SUBMIT,
} from './PortalField'
import { EyeIcon, EyeOffIcon } from './PortalIcons'

export default function PartnerSignInForm() {
  // Set by the registration step when it redirects here. Absent on a direct
  // visit, so the notice only appears when it explains something.
  const justRegistered = Boolean(useLocation().state?.registered)

  const {
    values,
    errors,
    change,
    submit,
    remember,
    toggleRemember,
    showPasscode,
    toggleShowPasscode,
    isSubmitting,
    isError,
  } = usePartnerSignIn()

  return (
    <>
      <h1 className="text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-white sm:text-[38px]">
        {portalCopy.title}
      </h1>

      <p className="mt-3.5 font-sans text-[14px] leading-[1.65] text-[#868f99]">
        {portalCopy.subtitle}
      </p>

      {/* Deliberately loud, and tied to the same flag: an open sign-in should
        * never be able to ship without saying so on screen. */}
      {DEMO_ACCESS && (
        <p className="mt-5 rounded-[10px] border border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.08)] px-4 py-3 font-sans text-[12.5px] leading-[1.6] text-[#f0b445]">
          Demo mode — Sign In opens the dashboard without checking anything.
        </p>
      )}

      {justRegistered && (
        <p className="mt-5 rounded-[10px] border border-[rgba(33,199,176,0.25)] bg-[rgba(33,199,176,0.08)] px-4 py-3 font-sans text-[13px] leading-[1.6] text-brand">
          {portalCopy.registered}
        </p>
      )}

      <form onSubmit={submit} noValidate className="mt-9 flex flex-col gap-5">
        {/* Email */}
        <div>
          <label htmlFor="portal-email" className={LABEL}>
            {portalCopy.emailLabel}
          </label>

          <input
            id="portal-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={change('email')}
            placeholder={portalCopy.emailPlaceholder}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'portal-email-error' : undefined}
            className={`${FIELD} ${errors.email ? FIELD_BAD : FIELD_OK} h-[52px]`}
          />

          {errors.email && (
            <p id="portal-email-error" className={ERROR}>
              {errors.email}
            </p>
          )}
        </div>

        {/* Passcode */}
        <div>
          <label htmlFor="portal-passcode" className={LABEL}>
            {portalCopy.passcodeLabel}
          </label>

          <div className="relative">
            <input
              id="portal-passcode"
              name="passcode"
              type={showPasscode ? 'text' : 'password'}
              autoComplete="current-password"
              value={values.passcode}
              onChange={change('passcode')}
              placeholder={portalCopy.passcodePlaceholder}
              aria-invalid={Boolean(errors.passcode)}
              aria-describedby={
                errors.passcode ? 'portal-passcode-error' : undefined
              }
              className={`${FIELD} ${errors.passcode ? FIELD_BAD : FIELD_OK} h-[52px] pr-12`}
            />

            <button
              type="button"
              onClick={toggleShowPasscode}
              aria-label={showPasscode ? 'Hide passcode' : 'Show passcode'}
              aria-pressed={showPasscode}
              className="absolute inset-y-0 right-0 flex w-12 cursor-pointer items-center justify-center bg-transparent text-[#7a8590] transition-colors hover:text-[#c3cad1]"
            >
              {showPasscode ? (
                <EyeOffIcon className="size-[18px]" />
              ) : (
                <EyeIcon className="size-[18px]" />
              )}
            </button>
          </div>

          {errors.passcode && (
            <p id="portal-passcode-error" className={ERROR}>
              {errors.passcode}
            </p>
          )}
        </div>

        {/* Remember + forgot */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <label
            htmlFor="portal-remember"
            className="flex cursor-pointer items-center gap-2.5 font-sans text-[13px] text-[#c3cad1] select-none"
          >
            <input
              id="portal-remember"
              name="remember"
              type="checkbox"
              checked={remember}
              onChange={toggleRemember}
              // `accent-color` styles the native control, which keeps the
              // keyboard and screen-reader behaviour a custom box would lose.
              className="size-[17px] cursor-pointer rounded-[4px] accent-brand"
            />
            {portalCopy.rememberLabel}
          </label>

          {/* Stubbed — password recovery is not built. See partnerLinks. */}
          <a
            href={partnerLinks.forgot}
            className="font-sans text-[13px] font-semibold text-brand no-underline transition-colors hover:text-[#4bdcc7]"
          >
            {portalCopy.forgotLabel}
          </a>
        </div>

        <button type="submit" disabled={isSubmitting} className={SUBMIT}>
          {isSubmitting ? portalCopy.submittingLabel : portalCopy.submitLabel}
        </button>
      </form>

      {/*
        * Only a failure surfaces here — a successful sign-in navigates to the
        * dashboard. Reserved space so the panel does not jump when it appears.
        */}
      <div aria-live="polite" className="min-h-[22px]">
        {isError && (
          <p className="mt-4 text-center font-sans text-[13px] text-[#ff8080]">
            We could not sign you in. Please try again.
          </p>
        )}
      </div>
    </>
  )
}

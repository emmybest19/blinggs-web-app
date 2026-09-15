import { Link } from 'react-router-dom'

import blinggLogo from '@shared/assets/blingg-logo.png'

import { partnerLinks } from '../data/partner.data'
import { portalCopy } from '../data/portal.data'
import { usePartnerSignIn } from '../hooks/usePartnerSignIn'
import { PILL } from './PortalBrandPanel'
import { EyeIcon, EyeOffIcon, LockIcon } from './PortalIcons'

const FIELD =
  'box-border w-full rounded-[10px] border bg-[#111a25] px-4 font-sans text-[14px] text-[#e9edf1] outline-none transition-colors placeholder:text-[#5f6b78]'

const OK = 'border-[#1d2938] focus:border-[rgba(30,195,170,0.65)]'
const BAD = 'border-[#7f3535] focus:border-[#ff8080]'

export default function PartnerSignInForm() {
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
    isSuccess,
    isError,
  } = usePartnerSignIn()

  return (
    <div className="flex items-center justify-center px-5 py-14 sm:px-8 lg:px-12 xl:px-20">
      <div className="w-full max-w-[420px]">
        {/* Compact brand strip — stands in for PortalBrandPanel when the
          * split collapses. */}
        <Link
          to="/affiliate"
          className="mb-10 flex flex-col items-center gap-4 no-underline lg:hidden"
        >
          <span className="flex items-center gap-2.5">
            <img
              src={blinggLogo}
              alt=""
              className="block size-9 object-contain"
            />
            <span className="text-[28px] leading-none font-bold tracking-[-0.02em] text-white">
              Blingg
            </span>
          </span>

          <span className={`${PILL} px-5 py-2.5 text-[11px]`}>
            {portalCopy.badge}
          </span>
        </Link>

        <h1 className="text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-white sm:text-[38px]">
          {portalCopy.title}
        </h1>

        <p className="mt-3.5 font-sans text-[14px] leading-[1.65] text-[#868f99]">
          {portalCopy.subtitle}
        </p>

        <form onSubmit={submit} noValidate className="mt-9 flex flex-col gap-5">
          {/* Email */}
          <div>
            <label
              htmlFor="portal-email"
              className="mb-2 block font-sans text-[13px] font-medium text-[#c3cad1]"
            >
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
              className={`${FIELD} ${errors.email ? BAD : OK} h-[52px]`}
            />

            {errors.email && (
              <p
                id="portal-email-error"
                className="mt-2 font-sans text-[12px] text-[#ff8080]"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Passcode */}
          <div>
            <label
              htmlFor="portal-passcode"
              className="mb-2 block font-sans text-[13px] font-medium text-[#c3cad1]"
            >
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
                className={`${FIELD} ${errors.passcode ? BAD : OK} h-[52px] pr-12`}
              />

              <button
                type="button"
                onClick={toggleShowPasscode}
                aria-label={
                  showPasscode ? 'Hide passcode' : 'Show passcode'
                }
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
              <p
                id="portal-passcode-error"
                className="mt-2 font-sans text-[12px] text-[#ff8080]"
              >
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex h-[54px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#00D4AB] font-sans text-[15px] font-bold text-[#071312] transition-all duration-250 hover:-translate-y-px hover:bg-[#00b894] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {isSubmitting ? portalCopy.submittingLabel : portalCopy.submitLabel}
          </button>
        </form>

        {/* Reserved space so the panel does not jump when a message appears */}
        <div aria-live="polite" className="min-h-[22px]">
          {isSuccess && (
            <p className="mt-4 text-center font-sans text-[13px] font-medium text-brand">
              Credentials accepted — the partner terminal is not live yet.
            </p>
          )}

          {isError && (
            <p className="mt-4 text-center font-sans text-[13px] text-[#ff8080]">
              We could not sign you in. Please try again.
            </p>
          )}
        </div>

        <p className="mt-7 flex items-center justify-center gap-2 font-sans text-[13px] text-[#6b7681]">
          <LockIcon className="size-[15px]" />
          {portalCopy.assurance}
        </p>
      </div>
    </div>
  )
}

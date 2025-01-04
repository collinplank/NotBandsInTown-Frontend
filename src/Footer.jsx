export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-purple-600 text-white py-8 shadow-inner">
      <div className="container mx-auto text-center">
        <p className="text-base md:text-lg font-medium tracking-wide">&copy; 2024 MyMusic. All rights reserved.</p>
        <div className="flex justify-center space-x-8 mt-6">
          <a
            href="https://facebook.com"
            className="text-gray-300 hover:text-yellow-400 transition duration-300"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.598 0 0 .598 0 1.326v21.348C0 23.402.598 24 1.325 24H12V14.708H9.692v-3.041H12V9.067c0-2.293 1.398-3.541 3.44-3.541.976 0 1.816.072 2.061.104v2.39l-1.414.001c-1.109 0-1.323.528-1.323 1.303v1.707h2.646l-.345 3.041H14.764V24h7.911c.728 0 1.325-.598 1.325-1.326V1.326C24 .598 23.402 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-300 hover:text-yellow-400 transition duration-300"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.556c-.883.392-1.83.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.194-.897-.956-2.178-1.555-3.594-1.555-2.717 0-4.92 2.202-4.92 4.917 0 .386.043.762.127 1.124C7.69 8.094 4.066 6.13 1.64 3.161c-.423.727-.666 1.572-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.617v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.172-1.296.172-.317 0-.626-.03-.927-.086.626 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.175-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14.002-7.504 14.002-14.002 0-.213-.005-.425-.014-.636.962-.694 1.797-1.56 2.457-2.548l-.047-.02z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-300 hover:text-yellow-400 transition duration-300"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.007.246 2.464.415a4.921 4.921 0 0 1 1.675 1.086 4.921 4.921 0 0 1 1.086 1.675c.169.457.359 1.258.415 2.464.058 1.267.069 1.647.069 4.851 0 3.204-.012 3.584-.069 4.851-.056 1.206-.246 2.007-.415 2.464a4.921 4.921 0 0 1-1.086 1.675 4.921 4.921 0 0 1-1.675 1.086c-.457.169-1.258.359-2.464.415-1.267.058-1.647.069-4.851.069-3.204 0-3.584-.012-4.851-.069-1.206-.056-2.007-.246-2.464-.415a4.921 4.921 0 0 1-1.675-1.086 4.921 4.921 0 0 1-1.086-1.675c-.169-.457-.359-1.258-.415-2.464-.058-1.267-.069-1.647-.069-4.851 0-3.204.012-3.584.069-4.851.056-1.206.246-2.007.415-2.464a4.921 4.921 0 0 1 1.086-1.675 4.921 4.921 0 0 1 1.675-1.086c.457-.169 1.258-.359 2.464-.415 1.267-.058 1.647-.069 4.851-.069zM12 0C8.741 0 8.332.013 7.052.07 5.775.126 4.841.313 4.07.563 3.216.828 2.48 1.24 1.757 1.964A7.923 7.923 0 0 0 .563 4.07C.313 4.841.126 5.775.07 7.052.013 8.332 0 8.741 0 12c0 3.259.013 3.668.07 4.948.056 1.277.243 2.211.493 2.982.265.854.677 1.59 1.401 2.314.724.724 1.46 1.136 2.314 1.401.771.25 1.705.437 2.982.493 1.28.057 1.689.07 4.948.07s3.668-.013 4.948-.07c1.277-.056 2.211-.243 2.982-.493.854-.265 1.59-.677 2.314-1.401.724-.724 1.136-1.46 1.401-2.314.25-.771.437-1.705.493-2.982.057-1.28.07-1.689.07-4.948s-.013-3.668-.07-4.948c-.056-1.277-.243-2.211-.493-2.982-.265-.854-.677-1.59-1.401-2.314-.724-.724-1.46-1.136-2.314-1.401-.771-.25-1.705-.437-2.982-.493C15.668.013 15.259 0 12 0zm0 5.838c-3.406 0-6.162 2.756-6.162 6.162S8.594 18.162 12 18.162 18.162 15.406 18.162 12 15.406 5.838 12 5.838zm0 10.324c-2.297 0-4.162-1.865-4.162-4.162S9.703 7.838 12 7.838s4.162 1.865 4.162 4.162-1.865 4.162-4.162 4.162zm6.406-11.845a1.44 1.44 0 0 1-1.44-1.44c0-.796.644-1.44 1.44-1.44.796 0 1.44.644 1.44 1.44 0 .796-.644 1.44-1.44 1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

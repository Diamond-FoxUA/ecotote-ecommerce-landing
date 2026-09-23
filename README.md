# 🌿 EcoTote — Premium Eco-Commerce Single Page Application

An engineering-grade, highly optimized eco-commerce landing platform built using modern architectural patterns in **Next.js 16 (App Router)** and **TypeScript**.

This production-ready single-page application showcases cutting-edge frontend capabilities, fluid interactive state-stitching, comprehensive internationalization (i18n), and an automated Server Action serverless data routing architecture that converts raw form interactions directly into an instant Telegram CRM notification network.

**Live:** [EcoTote Demo](https://ecotote-ecommerce-landing.vercel.app) <br />
**Design Mockup(provided by GoIT):** [Figma](https://www.figma.com/design/RCf95cRtisUxC8gsNFAFAp/EcoTote?node-id=5999-10563&p=f&t=Hc8UKrNK4gg8xZJe-0)

---

## 🚀 Key Feature Engineering

### ⚡ Live Async Form Pipeline & Telegram CRM Integration

- **Serverless Automation**: Bypasses legacy REST endpoints by leveraging native, safe **Next.js Server Actions** to securely process user data on runtime node layers.
- **Telegram Notification System**: Encapsulates data processing chunks securely inside `try/catch` runtime barriers on the server, mapping payloads using absolute HTML formatting tags (`<b>`, `<i>`) into real-time dispatch streams targeting your dedicated Telegram CRM monitoring channels.
- **Transactional User Experience**: Piped directly into an asynchronous UI layer controller via **Sonner Toast Promise chains** (`toast.promise`), mapping loading circles, success hooks, and caught error parameters cleanly to the user viewport.

### 🕵️ Intelligent Anti-Spam Honeypot Interceptors

- **Stealth Bot Protection**: Integrates an invisible input honeypot shield into form nodes (`w-0 h-0 overflow-hidden opacity-0 absolute`).
- **Zero Friction Processing**: Automated malicious script spiders automatically populate this hidden payload marker, while real humans ignore it. Early server-side validation guards detect any filled strings and silently short-circuit the execution path, returning a counterfeit success packet (`{ success: true }`) to deflect spam bot attacks without hitting external API limits or wasting execution bandwidth.

### 🌐 Universal Type-Safe i18n & Validation Infrastructure

- **Dynamic Localization Mapping**: Features a completely modular, unified static JSON dictionary mapping system (`uk.json` / `en.json`) distributed gracefully using custom global contexts (`DictionaryProvider`).
- **Synchronized Zod Error Schemas**: Validation errors are completely sanitized of hardcoded local strings. Schemas emit static translation lookup keys (e.g., `"errors.customerNameMin"`). Client views map these runtime tokens through a structural parsing utility (`getOrderErrorMessage`), ensuring that any automated server-side request rejections seamlessly translate to the user's selected language in real-time.
- **Localized Routing Stability**: Clean language isolation configuration tracking built on global layouts, parsing path boundaries via Next.js middleware routing parameters (`/[locale]`) to dynamically rewrite relative media addresses into secure absolute root pointers (`/img/...`).

### ♿ Accessible (WCAG / a11y) semantic Design Constants

- **Native Stacking Portals**: Interactive checkouts utilize the native HTML5 **`<dialog>`** layout engine managed through React refs (`useRef`). Focus visibility parameters, dismissal loops via keyboard `Esc` dispatches, and deep page document scroll locks (`overflow-hidden`) are managed natively by the browser within the **Top Layer** canvas.
- **Light Dismiss Event Bubbling**: Implements a clean element-target check layout listener (`e.target === dialogRef.current`), enabling fluid background backdrop dismissals without messing with complex DOM bounding-box coordinate loops or attaching unsafe event listeners to the global window.
- **Screen Reader Navigation Optimization**: Fully compliant with international accessibility standards utilizing reactive `aria-invalid`, `aria-describedby` string linking, and `role="alert"` tags to guarantee visually impaired visitors get instant context during validation events.
- **Semantic Navigation Triggers**: Internal single-page anchor linkages are engineered natively as `<button type="button">` nodes utilizing the modern, non-blocking asynchronous **`element.scrollIntoView({ behavior: 'smooth' })`** API, maintaining complete structural layout purity and keeping the address bar pristine.

---

## 🛠️ Stack & Dependency Architecture

- **Core Framework**: Next.js 16 (App Router, Server Actions)
- **Programming Language**: TypeScript
- **Data Validation Layer**: Zod
- **Form Architecture**: React Hook Form
- **Styling Pipeline**: Tailwind CSS
- **Notification UI Engine**: Sonner (Promise-handling stacked toast controllers)

---

## 📥 Local Installation & Verification Setup

Follow these steps to clone the repository and configure the local application cluster setup:

1. **Clone the Source Code**:

   ```bash
   git clone https://github.com/Diamond-FoxUA/ecotote-ecommerce-landing
   cd ecotote-ecommerce-landing
   ```

2. **Install Core Dependencies**:

   ```bash
   npm install
   ```

3. **Configure the Environment Credentials**:
   Create a secure localized environment file `.env.local` inside the root directory and append your specific verification token handles:

   ```env
   # Telegram API Gateway Integration Tokens
   TELEGRAM_BOT_TOKEN=your_secure_bot_token_from_botfather
   TELEGRAM_CHAT_ID=@your_public_or_private_channel_handle

   # Server Environment Metrics
   NODE_ENV=development
   SITE_URL=http://localhost:3000
   ```

4. **Launch the Development Compilers**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the verified local pipeline cluster address: [http://localhost:3000](http://localhost:3000)

---

## 📐 Directory Architecture Layout

The repository utilizes a modular, feature-driven architecture variant inspired by Feature-Driven Development (FDD) design constants:

```text
src/
├── app/                  # Next.js App Router root layout engine & localized i18n middleware routings
├── dictionaries/         # Static vocabulary files mapping localization data strings (uk.json / en.json)
├── features/             # Isolated self-contained logic cores
│   ├── catalog/          # Products loop grid, checkout forms, actions, and schemas
│   └── contacts/         # Main communication feedback action workflows and schemas
├── shared/               # Reusable atomic UI nodes, global layout context hooks, and sprite adapters
└── widgets/              # Global structural interface elements (Header / Footer wrappers)

```

---

## 📄 License

This project is licensed under the MIT License.

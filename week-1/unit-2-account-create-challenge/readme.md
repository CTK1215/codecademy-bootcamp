# In-Class Challenge (15–20 min)

## Responsive Account Creation Form (Flexbox + Mobile-First)

You will build a **mobile-first account creation form** and make it responsive using **Flexbox** and **one media query**.

---

## Goal
- On **mobile**: everything stacks in one column.
- On **desktop** (≥ 768px): fields lay out in **two columns** where it makes sense.

---

## Rules
- HTML + CSS only (no JS)
- Mobile-first CSS (base styles = small screens)
- Use **Flexbox** for layout (no floats, no grid)
- Keep it usable and readable (spacing matters)

---

## Required Fields
Your form must include inputs for:
- First name
- Last name
- Date of birth
- Social Security Number
- Phone number
- Address (street)
- City
- State
- ZIP code

Also include:
- A checkbox: “I agree to the Terms”
- A “Create Account” submit button

---

## Required Structure

### Header
At the top of the page, include a header that contains:
- An `h1` title: **Account Creation**
- A short paragraph explaining what the form is for

### Main
- Put the form inside a centered container (use `max-width` and `margin: 0 auto`)

---

## Provided HTML Starter (You May Add Classes, But Don’t Change Field Types)

```html
<header class="site-header">
  <h1>Account Creation</h1>
  <p>Create your account by filling out the form below.</p>
</header>

<main class="container">
  <form class="account-form">
    <div class="field">
      <label for="firstName">First name</label>
      <input id="firstName" name="firstName" type="text" required />
    </div>

    <div class="field">
      <label for="lastName">Last name</label>
      <input id="lastName" name="lastName" type="text" required />
    </div>

    <div class="field">
      <label for="dob">Date of birth</label>
      <input id="dob" name="dob" type="date" required />
    </div>

    <div class="field">
      <label for="ssn">Social Security Number</label>
      <input id="ssn" name="ssn" type="password" inputmode="numeric" required />
    </div>

    <div class="field">
      <label for="phone">Phone number</label>
      <input id="phone" name="phone" type="tel" inputmode="tel" required />
    </div>

    <div class="field field--full">
      <label for="address">Address</label>
      <input id="address" name="address" type="text" required />
    </div>

    <div class="field">
      <label for="city">City</label>
      <input id="city" name="city" type="text" required />
    </div>

    <div class="field">
      <label for="state">State</label>
      <input id="state" name="state" type="text" maxlength="2" required />
    </div>

    <div class="field">
      <label for="zip">ZIP code</label>
      <input id="zip" name="zip" type="text" inputmode="numeric" required />
    </div>

    <div class="field field--full">
      <label class="checkbox">
        <input type="checkbox" required />
        I agree to the Terms
      </label>
    </div>

    <div class="field field--full">
      <button type="submit">Create Account</button>
    </div>
  </form>
</main>

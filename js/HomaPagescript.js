// =============================================
//  SANCHARI - Tourist Website JavaScript
// =============================================

// ── 1. STICKY HEADER ON SCROLL ──────────────
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.position = 'fixed';
    header.style.width = '100%';
    header.style.top = '0';
    header.style.left = '0';
    header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
  } else {
    header.style.position = 'static';
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
  }
});

// ── 2. SMOOTH SCROLL FOR NAV LINKS ──────────
document.querySelectorAll('nav a, .footer-col a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ── 3. LOGIN BUTTON → MODAL ─────────────────
// Create modal HTML dynamically
const modalHTML = `
  <div id="login-modal" style="
    display:none; position:fixed; top:0; left:0; width:100%; height:100%;
    background:rgba(0,0,0,0.5); z-index:9999; align-items:center; justify-content:center;
  ">
    <div style="
      background:#fff; border-radius:20px; padding:40px; width:90%; max-width:400px;
      box-shadow:0 20px 60px rgba(0,0,0,0.3); position:relative; text-align:center;
    ">
      <button id="close-modal" style="
        position:absolute; top:15px; right:20px; background:none; border:none;
        font-size:1.5rem; cursor:pointer; color:#546E7A;
      ">&times;</button>
      <h2 style="font-family:'Playfair Display',serif; margin-bottom:25px; color:#263238;">Welcome Back</h2>
      <input id="login-email" type="email" placeholder="Email Address" style="
        width:100%; padding:12px 15px; margin-bottom:15px; border:1px solid #ddd;
        border-radius:10px; font-size:0.95rem; outline:none;
      "/>
      <input id="login-password" type="password" placeholder="Password" style="
        width:100%; padding:12px 15px; margin-bottom:20px; border:1px solid #ddd;
        border-radius:10px; font-size:0.95rem; outline:none;
      "/>
      <button id="submit-login" style="
        width:100%; padding:12px; background:linear-gradient(135deg,#78909C,#546E7A);
        color:white; border:none; border-radius:50px; font-size:1rem;
        font-weight:600; cursor:pointer;
      ">Login</button>
      <p id="login-msg" style="margin-top:15px; font-size:0.85rem; color:#E17055;"></p>
    </div>
  </div>
`;
// ── 3.1 SIGNIN BUTTON → MODAL ───────────────── 
// Create sign-in modal HTML dynamically
const modalOfHTML = `
  <div id="signIn" style=" display:none; position:fixed; top:0; left:0; width:100%; height:100%;
  background: rgba(0,0,0,0.5); z-index:9999; align-items:center; justify-content:center;"> 
    <div style="
        background:#fff; border-radius:20px; padding:40px; width:90%; max-width:400px;
        box-shadow:0 20px 60px rgba(0,0,0,0.3); position:relative; text-align: center;
        ">
         <button id="sign-close-modal" style="position:absolute; top:15px; right:20px; background:none; border:none;
           font-size:1.5rem; cursor:pointer; color:#546E7A;">&times;</button>
        <h2 style="font-family:'Playfair Display',serif; margin-bottom:25px; color:#263238;">Create account</h2>
        <input id="signIn-userName" type="text" placeholder="User name" style="width:100%; padding:12px 15px; margin-bottom:15px;
        border:1px solid #ddd; border-radius:10px; font-size:0.95rem; outline:none;"
        />
        <input id="signIn-email" type="email" placeholder="Email" style="width:100%; padding:12px 15px; margin-bottom:15px;
        border:1px solid #ddd; border-radius:10px; font-size:0.95rem; outline:none;
        "/>
        <input id="signIn-password" type="password" placeholder="password" style="width:100%; padding:12px 15px; margin-bottom:15px;
        border:1px solid #ddd; border-radius:10px; font-size:0.95rem; outline:none;
        "/>
        <button id="submit-sigIn" style="width:100%; padding:12px; background:linear-gradient(135deg,#78909c,#546E7A);
        color:white; border:none; border-radius:50px; font-size:1rem; fount-weight:600; cursor:pointer"
        >Sig In</button>
        <p id="sigIn-msg" style="margin-top:15px; font-size:0.85rem; color:#E17055;"></p>
        <div>
        <div>`;

        // ---- 3.8 USER DATA ----//
 const USER__DATA = [{userName : 'ganesh',
  email : 'ganeshbuchupalli@gmail.com',
  password : 'ganesh675134',

 }];
document.body.insertAdjacentHTML('beforeend', modalHTML);

const modal = document.getElementById('login-modal');
const closeModal = document.getElementById('close-modal');
const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

document.getElementById('submit-login').addEventListener('click', () => {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const msg = document.getElementById('login-msg');
  if (!email || !password) {
  
    msg.textContent = 'Please fill in all fields.';
    msg.style.color = '#E17055';
  }
  const user = USER__DATA.find(f => f.email === email && f.password === password)
  if(user)
  {
     msg.style.color = '#27ae60';
    msg.textContent = 'Login successful! Welcome to Sanchari 🌍';
    setTimeout(() => { modal.style.display = 'none'; msg.textContent = ''; }, 2000);
  }
  else {
    msg.style.color = '#af4419';
    msg.textContent = 'Incorrcet email or password.Try aagain';
  }
});

//───3.1. Sign IN DETAILS─────────────────────

document.body.insertAdjacentHTML('beforeend', modalOfHTML)

const sigInModal = document.getElementById('signIn');
const signClose = document.getElementById('sign-close-modal');
const sigInBtn = document.querySelector('.signin-btn');

sigInBtn.addEventListener('click',() => {
  sigInModal.style.display = 'flex';
});
signClose.addEventListener("click",() => {
  sigInModal.style.display = 'none';
});
sigInModal.addEventListener('click', (e) =>{
 if(e.target === sigInModal) sigInModal.style.display = 'none';
});
document.getElementById('submit-sigIn').addEventListener('click', () => {
  const signUserName = document.getElementById('signIn-userName').value.trim();
  const signEmail = document.getElementById('signIn-email').value.trim();
  const signPassword = document.getElementById('signIn-password').value.trim();
  const signMsg = document.getElementById('sigIn-msg');
  if(!signEmail || !signPassword || !signUserName )
  {
    signMsg.textContent = "Please fill in all fields.";
    signMsg.style.color = '#E17055';
  } else {
    USER__DATA.push({userName : signUserName, email: signEmail, password:signPassword})
    signMsg.textContent= 'signIn successfull! Welcome to Sanchari 🌏';
    signMsg.style.color= '#27ae60';
    setTimeout(() => {sigInModal.style.display = 'none'; signMsg.textContent='';}, 2000);
  }
})
console.log(USER__DATA.length)
// ---- 3.5 INVOK LOGIN OR SIGNIN MODELS -----//
// ── 4. VIEW DETAILS → TOAST NOTIFICATION ────
document.querySelectorAll('.card-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const placeName = this.closest('.card').querySelector('h2, h3').textContent;
    showToast(`📍 Viewing details for: ${placeName}`);
  });
});

// ── 5. BOOK NOW BUTTON ─────────────────────
document.querySelectorAll('.book-btn').forEach(btn => {
  // skip newsletter subscribe button
  if (btn.closest('.newsletters')) return;
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const packageName = this.closest('.card')?.querySelector('h3')?.textContent || 'this package';
    const price = this.closest('.card')?.querySelector('.price')?.textContent || '';
    showToast(`✅ Booking confirmed for: ${packageName} — ${price}`);
  });
});

// ── 6. NEWSLETTER SUBSCRIBE ──────────────────
const subscribeBtn = document.querySelector('.newsletters .book-btn');
const emailInput = document.querySelector('.newsletters input');
if (subscribeBtn && emailInput) {
  subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const val = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) {
      showToast('⚠️ Please enter your email address.', 'error');
    } else if (!emailRegex.test(val)) {
      showToast('⚠️ Please enter a valid email address.', 'error');
    } else {
      showToast('🎉 Subscribed successfully! Welcome to Sanchari newsletter.');
      emailInput.value = '';
    }
  });
}

// ── 7. CARD SCROLL REVEAL ANIMATION ─────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// ── 8. ACTIVE NAV LINK ON SCROLL ─────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#263238' : '#546E7A';
    link.style.fontWeight = link.getAttribute('href') === `#${current}` ? '700' : '600';
  });
});

// ── 9. TOAST NOTIFICATION HELPER ─────────────
function showToast(message, type = 'success') {
  // Remove existing toast
  const existing = document.getElementById('toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
    background: ${type === 'error' ? '#E17055' : '#546E7A'};
    color: white; padding: 14px 28px; border-radius: 50px;
    font-size: 0.9rem; font-weight: 500; z-index: 99999;
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
    animation: fadeInUp 0.4s ease forwards;
  `;

  // Inject keyframe if not already there
  if (!document.getElementById('toast-style')) {
    const style = document.createElement('style');
    style.id = 'toast-style';
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity:0; transform: translateX(-50%) translateY(20px); }
        to   { opacity:1; transform: translateX(-50%) translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}
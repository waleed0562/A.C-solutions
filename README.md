# A.C. SOLUTIONS - Professional Website

A modern, premium website for A.C. SOLUTIONS - a Nigerian technology company providing software development, web design, mobile app development, intranet development, enterprise systems, cloud solutions, IT solutions, and computer technology services.

## Website Features

### Pages Included

1. **Home (index.html)** - Hero section with CTAs, services overview, trust indicators, process flow, and industries served
2. **About (about.html)** - Company story, mission, vision, values, founder bio, and trust indicators
3. **Services (services.html)** - Detailed information about all 6 service categories
4. **Portfolio (portfolio.html)** - Case studies, project showcase, and filterable project gallery
5. **Pricing (pricing.html)** - Transparent pricing tiers, service pricing, and FAQs
6. **Blog (blog.html)** - Technology insights, articles, categories, and newsletter signup
7. **Careers (careers.html)** - Company culture, job openings, internships, and application form
8. **Contact (contact.html)** - Contact form, information, map, and process explanation

### Design Features

- **Dark Theme**: Deep black (#070B12), navy blue (#0B1F3A) with electric blue (#2563EB) and cyan (#22D3EE) accents
- **Glassmorphism**: Frosted glass cards with backdrop blur effects
- **Animations**: Smooth transitions, fade-in effects, floating elements
- **Responsive Design**: Mobile-first, fully responsive on all devices
- **Modern Typography**: Clean, professional fonts with excellent spacing
- **SEO Optimized**: Meta tags, structured data, Open Graph, XML sitemap, robots.txt

### Technology Stack

**Frontend:**
- HTML5
- CSS3 (Custom, no framework)
- Vanilla JavaScript
- Responsive Grid & Flexbox

**Features:**
- Mobile menu toggle
- Form handling with localStorage
- Portfolio filtering
- Blog filtering
- Smooth scrolling
- Scroll animations
- Local storage for submissions

### File Structure

```
website/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── portfolio.html      # Portfolio page
├── pricing.html        # Pricing page
├── blog.html           # Blog page
├── careers.html        # Careers page
├── contact.html        # Contact page
├── robots.txt          # SEO: Search engine instructions
├── sitemap.xml         # SEO: URL sitemap
├── css/
│   ├── styles.css      # Main stylesheet
│   └── extended.css    # Page-specific styles
├── js/
│   └── main.js         # JavaScript functionality
└── assets/
    └── ac-solutions-logo.png  # Company logo
```

## Installation & Setup

### Local Development

1. **Prepare Logo**
   - Copy your `ac-solutions-logo.png` to the `assets/` folder
   - Logo size: 40x40px for navbar, higher quality for other uses

2. **Update Contact Information**
   - Replace `+2348105628210` with your actual phone number
   - Replace `saadshamsuddeen97@gmail.com` with your email
   - Update location from "Kano State, Nigeria" if needed

3. **Customize Colors** (Optional)
   - Edit CSS variables in `css/styles.css`:
     ```css
     :root {
         --primary-dark: #070B12;
         --secondary-dark: #0B1F3A;
         --accent-blue: #2563EB;
         --accent-cyan: #22D3EE;
         /* ... */
     }
     ```

4. **Add Extended CSS**
   - Link the extended stylesheet in each HTML file:
     ```html
     <link rel="stylesheet" href="css/extended.css">
     ```
     Add this after `css/styles.css` in `<head>`

## Features & Usage

### Forms

All forms submit to localStorage for demo purposes:
- Contact form
- Application form
- Newsletter signup

To check submissions in browser console:
```javascript
window.acsDebug.getFormSubmissions()  // View form submissions
window.acsDebug.getSubscribers()      // View newsletter subscribers
window.acsDebug.getAnalytics()        // View page analytics
window.acsDebug.clearAll()            // Clear all stored data
```

### Portfolio Filtering

Click filter buttons to show/hide projects by category:
- All Projects
- Web Applications
- Mobile Apps
- Business Software
- Corporate Websites
- Enterprise Systems

### Blog Filtering

Filter blog articles by category:
- All Articles
- Web Development
- Software Engineering
- Mobile Apps
- Cybersecurity
- Business Technology
- AI & Automation
- Cloud Computing

### Mobile Menu

The navigation menu automatically becomes a hamburger menu on mobile devices. Click the menu icon to toggle.

## Customization Guide

### Adding New Blog Posts

1. Create a new blog card in `blog.html`:
```html
<article class="blog-card" data-category="web">
    <div class="blog-image">
        <div class="image-placeholder">📝</div>
    </div>
    <div class="blog-content">
        <div class="article-meta">
            <span class="category">Web Development</span>
            <span class="date">August 15, 2024</span>
        </div>
        <h3>Your Article Title</h3>
        <p>Article summary or first paragraph.</p>
        <a href="#" class="read-more">Read More →</a>
    </div>
</article>
```

### Adding New Portfolio Projects

1. Create a new portfolio card in `portfolio.html`:
```html
<div class="portfolio-card" data-category="web">
    <div class="portfolio-image">
        <div class="image-placeholder">🎨</div>
        <div class="overlay">
            <a href="#" class="view-project">View Project →</a>
        </div>
    </div>
    <div class="portfolio-info">
        <h3>Project Name</h3>
        <p class="category">Project Category</p>
        <p>Project description.</p>
        <div class="tech-used">Technology1 • Technology2</div>
    </div>
</div>
```

### Adding Job Openings

1. Create a new position card in `careers.html`:
```html
<div class="position-card">
    <div class="position-header">
        <h3>Position Title</h3>
        <span class="position-type">Full-time</span>
    </div>
    <div class="position-details">
        <div class="detail">
            <span class="label">Location:</span>
            <span>City / Remote</span>
        </div>
        <div class="detail">
            <span class="label">Experience:</span>
            <span>X-Y years</span>
        </div>
    </div>
    <div class="position-description">
        <h4>About the Role</h4>
        <p>Description...</p>
        <!-- Add requirements, nice-to-haves -->
    </div>
    <a href="contact.html" class="btn btn-primary">Apply Now</a>
</div>
```

## SEO Optimization

### What's Included

✓ Meta descriptions for all pages
✓ Open Graph tags for social sharing
✓ Semantic HTML5
✓ XML Sitemap
✓ Robots.txt
✓ Mobile-friendly (responsive)
✓ Fast loading (optimized)
✓ Structured data ready
✓ Internal linking structure
✓ Keyword optimization

### SEO Improvements to Consider

1. **Add Schema Markup**
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "LocalBusiness",
     "name": "A.C. SOLUTIONS",
     "image": "https://ac-solutions.ng/assets/ac-solutions-logo.png",
     "description": "Software development and IT solutions company",
     "address": {
       "@type": "PostalAddress",
       "addressLocality": "Kano",
       "addressRegion": "Nigeria"
     },
     "telephone": "+2348105628210"
   }
   </script>
   ```

2. **Google Analytics**
   - Add your Google Analytics ID

3. **Google Search Console**
   - Verify website ownership
   - Submit sitemap
   - Monitor search performance

4. **Social Media Meta Tags**
   - Update social links in footer
   - Add Open Graph images for better sharing

## Performance Tips

### Image Optimization

- Use optimized images (WebP format recommended)
- Consider lazy loading for images
- Compress PNG/JPG files

### Caching

- Enable browser caching
- Use CDN for static files
- Minify CSS and JavaScript in production

### Core Web Vitals

- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

## Deployment

### Hosting Options

1. **Netlify** (Recommended for static sites)
   - Easy deployment
   - Free SSL
   - CDN included
   - Form handling available

2. **Vercel**
   - Optimized for performance
   - Automatic HTTPS
   - Serverless functions optional

3. **GitHub Pages**
   - Free hosting
   - Git-based workflow
   - Custom domain support

4. **Traditional Hosting**
   - GoDaddy, Bluehost, etc.
   - Full server control
   - Email hosting included

### Domain Setup

1. Purchase domain (e.g., ac-solutions.ng)
2. Point domain to hosting provider
3. Update contact information in website
4. Submit to search engines

## Forms & Email

### Contact Form Setup

Currently, forms save to localStorage. To enable email notifications:

**Option 1: Formspree (Recommended)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

**Option 2: Netlify Forms**
```html
<form name="contact" method="POST" netlify>
    <!-- form fields -->
</form>
```

**Option 3: SendGrid / Mailgun**
- Use their APIs for backend email handling

## Analytics & Tracking

### Local Analytics (Built-in)

Check analytics in console:
```javascript
window.acsDebug.getAnalytics()
```

### Google Analytics

Add to HTML head:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Troubleshooting

### Mobile Menu Not Working
- Check if `menu-toggle` class exists in HTML
- Ensure `js/main.js` is loaded
- Check browser console for errors

### Forms Not Submitting
- Check browser console for errors
- Verify form has proper id attribute
- Check localStorage is enabled

### Styling Issues
- Ensure both `styles.css` and `extended.css` are linked
- Clear browser cache (Ctrl+Shift+Delete)
- Check for CSS conflicts

### Images Not Showing
- Verify logo path: `assets/ac-solutions-logo.png`
- Use absolute paths for images
- Check image file format (PNG, JPG, WebP)

## Support & Maintenance

### Regular Updates Needed

- Update copyright year in footer
- Add new blog posts regularly
- Update portfolio with new projects
- Review and update pricing
- Keep contact information current

### Security Considerations

- Implement proper backend for form handling
- Validate all form inputs
- Use HTTPS (enabled by default on modern hosting)
- Regular security audits
- Keep dependencies updated

## License

This website template is provided as-is for A.C. SOLUTIONS.

## Contact

For customization or support:
- Phone: +2348105628210
- Email: saadshamsuddeen97@gmail.com
- WhatsApp: +2348105628210

---

**Website Version**: 1.0  
**Last Updated**: August 13, 2024  
**Created for**: A.C. SOLUTIONS - Anything Computers

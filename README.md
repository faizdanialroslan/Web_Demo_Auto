# Web Demo Automation Project

This is a Playwright automation testing project for web application testing, including user registration, login, logout, contact forms, and API testing.

## 🏗️ Project Structure

```
├── .github/workflows/
│   └── playwright.yml          # CI/CD pipeline configuration
├── tests/
│   ├── UIBasics.spec.js        # UI basic test cases
│   └── Web_DemoAuto/           # Main test suite
│       ├── TC01_RegisterUser.spec.js
│       ├── TC02_LoginValid.spec.js
│       ├── TC03_LoginInvalid.spec.js
│       ├── TC04_LogoutUser.spec.js
│       ├── TC05_RegisterExistingEmail.spec.js
│       ├── TC06_ContactUsForm.spec.js
│       ├── TC07_DeletionAcc.spec.js
│       ├── TC08_API_Get All Products List.spec.js
│       ├── TC09_API_POST To Search Product.spec.js
│       ├── TC10_PUT METHOD To Update User Account.spec.js
│       └── testauto.spec.js
├── playwright.config.js        # Playwright configuration
└── package.json               # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS version)
- npm

### Installation
```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## 🧪 Running Tests

### Local Testing
```bash
# Run all tests
npm test

# Run with UI
npm run test:headed

# Run specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Run mobile tests
npm run test:mobile

# Run Web Demo Auto tests only
npm run test:web

# Debug tests
npm run test:debug
```

### Test Reports
```bash
# Open HTML report
npm run report
```

## 🔄 Continuous Integration

This project uses GitHub Actions for automated testing on every push and pull request to `main` or `master` branches.

### CI Pipeline Features:
- ✅ Automatic dependency installation
- ✅ Playwright browser setup
- ✅ Test execution on Ubuntu
- ✅ HTML test reports generation
- ✅ Artifact uploads for test results
- ✅ Manual workflow trigger support

### CI Configuration:
The CI pipeline runs:
1. **Setup**: Checkout code and setup Node.js
2. **Dependencies**: Install npm dependencies
3. **Browsers**: Install Playwright browsers (Chromium only for CI)
4. **Tests**: Execute Web Demo Auto test suite
5. **Reports**: Upload test results and HTML reports

### Viewing CI Results:
1. Go to your repository on GitHub
2. Navigate to the "Actions" tab
3. View workflow runs and download artifacts
4. Test reports are retained for 30 days

## 📊 Test Projects

The project is configured to run tests across multiple browsers:
- **Chromium** (Primary for CI)
- **Firefox**
- **WebKit/Safari**
- **Mobile Chrome**
- **Mobile Safari**

## 🛠️ Configuration

### Playwright Config Features:
- Multi-browser support
- Headless mode for CI, headed for local development
- Retry mechanism on CI (2 retries)
- Screenshot capture on failure
- Trace collection for debugging
- HTML and GitHub reporters
- Parallel test execution

### Environment Variables:
- `CI`: Automatically set by GitHub Actions
- Tests run in headless mode when `CI=true`
- Retries are enabled only on CI

## 🐛 Troubleshooting

### Common Issues:
1. **Tests fail locally**: Ensure browsers are installed with `npx playwright install`
2. **CI failures**: Check the Actions tab for detailed logs
3. **Port conflicts**: Make sure no other services are running on default ports

### Debug Mode:
```bash
npm run test:debug
```

## 📈 Test Coverage

Current test suite includes:
- User registration and authentication
- Form validations
- API endpoint testing
- UI interaction testing
- Contact form functionality
- Account management operations

## 🤝 Contributing

1. Create a feature branch
2. Add your tests following the existing pattern
3. Ensure tests pass locally
4. Create a pull request
5. CI will automatically run and validate your tests

## 📞 Support

For issues or questions about the test automation setup, please check the GitHub Actions logs or create an issue in the repository.

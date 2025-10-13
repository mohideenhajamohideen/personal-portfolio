# ElevenLabs Widget Integration Test Checklist

## Test Execution Date: [To be filled]
## Tester: [To be filled]

---

## 1. Widget Loading & Initialization Tests

### 1.1 Widget Element Presence
- [ ] **Test**: Open index.html in browser
- [ ] **Verify**: Widget appears on the page
- [ ] **Expected**: ElevenLabs conversational AI widget is visible
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 1.2 Script Loading
- [ ] **Test**: Check browser DevTools Network tab
- [ ] **Verify**: Script loads from `https://unpkg.com/@elevenlabs/convai-widget-embed`
- [ ] **Expected**: Script loads successfully (200 status)
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 1.3 Agent ID Configuration
- [ ] **Test**: Inspect widget element in DevTools
- [ ] **Verify**: `agent-id` attribute is set to "agent_6301k7fhssjnepnvvajj2krtefc7"
- [ ] **Expected**: Correct agent ID is present
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 1.4 Widget Functionality
- [ ] **Test**: Click on the widget to interact
- [ ] **Verify**: Widget responds and allows voice interaction
- [ ] **Expected**: Widget is functional and interactive
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

---

## 2. Positioning & Layout Tests

### 2.1 Fixed Positioning
- [ ] **Test**: Scroll the page up and down
- [ ] **Verify**: Widget remains in fixed position
- [ ] **Expected**: Widget stays visible while scrolling
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 2.2 Bottom-Right Corner Placement (Desktop)
- [ ] **Test**: View on desktop (>1024px width)
- [ ] **Verify**: Widget is positioned in bottom-right corner with 24px spacing
- [ ] **Expected**: Widget is properly positioned
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 2.3 Mobile Positioning
- [ ] **Test**: View on mobile (<768px width) or use DevTools device emulation
- [ ] **Verify**: Widget is positioned with 16px spacing from edges
- [ ] **Expected**: Widget doesn't obstruct critical content
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 2.4 Z-Index Layering
- [ ] **Test**: Check widget appears above other content
- [ ] **Verify**: Widget is above header and content (z-index: 40)
- [ ] **Expected**: Widget is always visible and clickable
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 2.5 Content Obstruction Check
- [ ] **Test**: Navigate through all sections of the portfolio
- [ ] **Verify**: Widget doesn't block important navigation or content
- [ ] **Expected**: All content remains accessible
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

---

## 3. Visual Effects Tests

### 3.1 Glow Effect - Light Mode
- [ ] **Test**: View page in light mode
- [ ] **Verify**: Widget has blue glow effect (rgba(59, 130, 246, ...))
- [ ] **Expected**: Subtle but visible glow around widget
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 3.2 Glow Effect - Dark Mode
- [ ] **Test**: Toggle to dark mode
- [ ] **Verify**: Widget has enhanced lighter blue glow (rgba(96, 165, 250, ...))
- [ ] **Expected**: More prominent glow in dark mode
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 3.3 Pulse Animation - Light Mode
- [ ] **Test**: Observe widget in light mode for 3-5 seconds
- [ ] **Verify**: Glow pulses smoothly (3s cycle)
- [ ] **Expected**: Smooth breathing animation
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 3.4 Pulse Animation - Dark Mode
- [ ] **Test**: Observe widget in dark mode for 3-5 seconds
- [ ] **Verify**: Enhanced glow pulses smoothly
- [ ] **Expected**: More prominent pulse animation
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 3.5 Border Radius
- [ ] **Test**: Inspect widget visually
- [ ] **Verify**: Widget has rounded corners (border-radius: 50%)
- [ ] **Expected**: Circular or rounded appearance
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

---

## 4. Theme Compatibility Tests

### 4.1 Light to Dark Mode Transition
- [ ] **Test**: Toggle from light to dark mode
- [ ] **Verify**: Widget glow transitions smoothly
- [ ] **Expected**: No visual glitches, smooth transition
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 4.2 Dark to Light Mode Transition
- [ ] **Test**: Toggle from dark to light mode
- [ ] **Verify**: Widget glow transitions smoothly
- [ ] **Expected**: No visual glitches, smooth transition
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 4.3 Light Mode Color Matching
- [ ] **Test**: Compare widget glow with portfolio's blue theme
- [ ] **Verify**: Colors complement the design (blue-600 tones)
- [ ] **Expected**: Cohesive visual design
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 4.4 Dark Mode Visibility
- [ ] **Test**: View widget in dark mode
- [ ] **Verify**: Glow is clearly visible against dark background
- [ ] **Expected**: Enhanced visibility in dark mode
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

---

## 5. Responsive Design Tests

### 5.1 Mobile View (<768px)
- [ ] **Test**: View on mobile device or emulate (e.g., iPhone 12, 390x844)
- [ ] **Verify**: Widget is appropriately sized and positioned
- [ ] **Expected**: Widget fits well, doesn't obstruct content
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Device**: _______________________
- [ ] **Notes**: _______________________

### 5.2 Tablet View (768px - 1024px)
- [ ] **Test**: View on tablet or emulate (e.g., iPad, 768x1024)
- [ ] **Verify**: Widget maintains good positioning
- [ ] **Expected**: Widget is well-positioned and accessible
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Device**: _______________________
- [ ] **Notes**: _______________________

### 5.3 Desktop View (>1024px)
- [ ] **Test**: View on desktop (e.g., 1920x1080)
- [ ] **Verify**: Widget uses optimal sizing
- [ ] **Expected**: Widget is properly sized for large screens
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Resolution**: _______________________
- [ ] **Notes**: _______________________

### 5.4 Touch Target Size (Mobile)
- [ ] **Test**: Try tapping widget on touch device
- [ ] **Verify**: Widget is easily tappable
- [ ] **Expected**: No difficulty interacting with widget
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 5.5 Hover Effect (Desktop)
- [ ] **Test**: Hover over widget on desktop (>769px)
- [ ] **Verify**: Widget scales up (1.05) and glow intensifies
- [ ] **Expected**: Smooth hover animation
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 5.6 No Hover on Mobile
- [ ] **Test**: Verify hover styles don't apply on mobile
- [ ] **Verify**: No hover effect on touch devices
- [ ] **Expected**: Touch-appropriate behavior
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

---

## 6. Browser Compatibility Tests

### 6.1 Chrome
- [ ] **Test**: Open in Chrome (latest version)
- [ ] **Verify**: All features work correctly
- [ ] **Expected**: Full functionality
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Version**: _______________________
- [ ] **Notes**: _______________________

### 6.2 Firefox
- [ ] **Test**: Open in Firefox (latest version)
- [ ] **Verify**: All features work correctly
- [ ] **Expected**: Full functionality
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Version**: _______________________
- [ ] **Notes**: _______________________

### 6.3 Safari
- [ ] **Test**: Open in Safari (latest version)
- [ ] **Verify**: All features work correctly
- [ ] **Expected**: Full functionality
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Version**: _______________________
- [ ] **Notes**: _______________________

### 6.4 Edge
- [ ] **Test**: Open in Edge (latest version)
- [ ] **Verify**: All features work correctly
- [ ] **Expected**: Full functionality
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Version**: _______________________
- [ ] **Notes**: _______________________

### 6.5 Mobile Safari (iOS)
- [ ] **Test**: Open on iPhone/iPad
- [ ] **Verify**: All features work correctly
- [ ] **Expected**: Full functionality
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Device/Version**: _______________________
- [ ] **Notes**: _______________________

### 6.6 Chrome Mobile (Android)
- [ ] **Test**: Open on Android device
- [ ] **Verify**: All features work correctly
- [ ] **Expected**: Full functionality
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Device/Version**: _______________________
- [ ] **Notes**: _______________________

---

## 7. Performance Tests

### 7.1 Async Script Loading
- [ ] **Test**: Check Network tab in DevTools
- [ ] **Verify**: Script loads asynchronously (doesn't block page render)
- [ ] **Expected**: Page loads quickly, script loads in background
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 7.2 No Layout Shifts
- [ ] **Test**: Observe page load carefully
- [ ] **Verify**: No content jumps when widget loads
- [ ] **Expected**: Stable layout during load
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 7.3 Page Load Time
- [ ] **Test**: Measure page load time with and without widget
- [ ] **Verify**: Minimal impact on load time
- [ ] **Expected**: <500ms additional load time
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Load Time**: _______________________
- [ ] **Notes**: _______________________

### 7.4 Animation Performance
- [ ] **Test**: Observe pulse animation smoothness
- [ ] **Verify**: No jank or stuttering
- [ ] **Expected**: Smooth 60fps animation
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 7.5 Script Failure Handling
- [ ] **Test**: Block the ElevenLabs CDN in DevTools
- [ ] **Verify**: Page remains functional
- [ ] **Expected**: Graceful degradation, no errors shown to user
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

---

## 8. Accessibility Tests

### 8.1 Keyboard Navigation
- [ ] **Test**: Navigate page using Tab key
- [ ] **Verify**: Widget is keyboard accessible
- [ ] **Expected**: Can reach and interact with widget via keyboard
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 8.2 Focus Indicators
- [ ] **Test**: Tab to widget
- [ ] **Verify**: Clear focus indicator is visible
- [ ] **Expected**: Visible focus state
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 8.3 Screen Reader (VoiceOver - macOS/iOS)
- [ ] **Test**: Enable VoiceOver and navigate to widget
- [ ] **Verify**: Widget is properly announced
- [ ] **Expected**: Screen reader describes widget appropriately
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 8.4 Screen Reader (NVDA - Windows)
- [ ] **Test**: Enable NVDA and navigate to widget
- [ ] **Verify**: Widget is properly announced
- [ ] **Expected**: Screen reader describes widget appropriately
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

---

## 9. Integration Tests

### 9.1 Visitor Counter Functionality
- [ ] **Test**: Check visitor counter still works
- [ ] **Verify**: Counter displays and updates
- [ ] **Expected**: No interference with existing features
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 9.2 Navigation Links
- [ ] **Test**: Click all navigation links
- [ ] **Verify**: All links work correctly
- [ ] **Expected**: No interference with navigation
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 9.3 Contact Form
- [ ] **Test**: Submit contact form
- [ ] **Verify**: Form works correctly
- [ ] **Expected**: No interference with form functionality
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 9.4 Theme Toggle
- [ ] **Test**: Toggle theme multiple times
- [ ] **Verify**: Theme toggle works smoothly
- [ ] **Expected**: No interference with theme system
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

---

## 10. User Experience Tests

### 10.1 Widget Discoverability
- [ ] **Test**: Show page to someone unfamiliar
- [ ] **Verify**: Widget is noticeable but not intrusive
- [ ] **Expected**: Good balance of visibility
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 10.2 Visual Harmony
- [ ] **Test**: Review overall page design
- [ ] **Verify**: Widget fits the portfolio aesthetic
- [ ] **Expected**: Cohesive design
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

### 10.3 Interaction Quality
- [ ] **Test**: Use the widget for a conversation
- [ ] **Verify**: Widget provides good user experience
- [ ] **Expected**: Smooth, intuitive interaction
- [ ] **Status**: ⬜ Pass / ⬜ Fail
- [ ] **Notes**: _______________________

---

## Test Summary

### Overall Results
- **Total Tests**: 60
- **Passed**: _______
- **Failed**: _______
- **Pass Rate**: _______%

### Critical Issues Found
1. _______________________
2. _______________________
3. _______________________

### Minor Issues Found
1. _______________________
2. _______________________
3. _______________________

### Recommendations
1. _______________________
2. _______________________
3. _______________________

### Sign-off
- **Tester Name**: _______________________
- **Date**: _______________________
- **Signature**: _______________________

---

## Requirements Coverage

This test checklist covers all requirements from the requirements document:

- **Requirement 1 (Widget Integration)**: Tests 1.1-1.4, 6.1-6.6
- **Requirement 2 (Floating Widget Positioning)**: Tests 2.1-2.5
- **Requirement 3 (Visual Glow Effect)**: Tests 3.1-3.5
- **Requirement 4 (Theme Compatibility)**: Tests 4.1-4.4
- **Requirement 5 (Responsive Design)**: Tests 5.1-5.6
- **Requirement 6 (Performance and Loading)**: Tests 7.1-7.5

All acceptance criteria have been translated into testable checkpoints.

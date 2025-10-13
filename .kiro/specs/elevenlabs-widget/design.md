# Design Document

## Overview

This design document outlines the implementation approach for integrating the ElevenLabs conversational AI widget into the portfolio website. The solution will add a floating, visually appealing AI assistant that visitors can interact with using voice. The widget will be styled with a glow effect and positioned to be accessible without obstructing content, while maintaining compatibility with the existing dark/light theme system.

## Architecture

### Component Structure

The implementation consists of three main components:

1. **Widget Embed Element**: The `<elevenlabs-convai>` custom HTML element that hosts the AI widget
2. **Widget Script**: The external ElevenLabs script loaded from their CDN
3. **Custom Styling Layer**: CSS styles to position, style, and add glow effects to the widget

### Integration Points

- **HTML Integration**: Widget element added to the main `index.html` file before the closing `</body>` tag
- **CSS Integration**: Custom styles added to the existing `<style>` block in the `<head>` section
- **Theme System**: Leverages existing dark mode toggle functionality (no modifications needed)

## Components and Interfaces

### 1. Widget HTML Element

```html
<elevenlabs-convai agent-id="agent_6301k7fhssjnepnvvajj2krtefc7"></elevenlabs-convai>
<script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
```

**Properties:**
- `agent-id`: The unique identifier for the ElevenLabs AI agent
- Script loads asynchronously to prevent blocking page render

**Placement:** 
- Positioned at the end of the `<body>` tag, just before the closing `</body>`
- This ensures the DOM is loaded before the widget initializes

### 2. Widget Container Styling

The widget will be styled using CSS custom properties and modern CSS features:

```css
elevenlabs-convai {
  /* Positioning */
  position: fixed !important;
  bottom: 24px;
  right: 24px;
  z-index: 40;
  
  /* Glow Effect - Light Mode */
  box-shadow: 
    0 0 20px rgba(59, 130, 246, 0.3),
    0 0 40px rgba(59, 130, 246, 0.2),
    0 0 60px rgba(59, 130, 246, 0.1);
  
  /* Smooth transitions */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Border radius for modern look */
  border-radius: 50%;
  
  /* Animation */
  animation: pulse-glow 3s ease-in-out infinite;
}

/* Dark mode glow */
.dark elevenlabs-convai {
  box-shadow: 
    0 0 25px rgba(96, 165, 250, 0.5),
    0 0 50px rgba(96, 165, 250, 0.3),
    0 0 75px rgba(96, 165, 250, 0.2);
}

/* Pulse animation */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 
      0 0 20px rgba(59, 130, 246, 0.3),
      0 0 40px rgba(59, 130, 246, 0.2),
      0 0 60px rgba(59, 130, 246, 0.1);
  }
  50% {
    box-shadow: 
      0 0 30px rgba(59, 130, 246, 0.4),
      0 0 60px rgba(59, 130, 246, 0.3),
      0 0 90px rgba(59, 130, 246, 0.2);
  }
}

/* Dark mode pulse animation */
.dark elevenlabs-convai {
  animation: pulse-glow-dark 3s ease-in-out infinite;
}

@keyframes pulse-glow-dark {
  0%, 100% {
    box-shadow: 
      0 0 25px rgba(96, 165, 250, 0.5),
      0 0 50px rgba(96, 165, 250, 0.3),
      0 0 75px rgba(96, 165, 250, 0.2);
  }
  50% {
    box-shadow: 
      0 0 35px rgba(96, 165, 250, 0.6),
      0 0 70px rgba(96, 165, 250, 0.4),
      0 0 105px rgba(96, 165, 250, 0.3);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  elevenlabs-convai {
    bottom: 16px;
    right: 16px;
    /* Slightly smaller glow on mobile */
    box-shadow: 
      0 0 15px rgba(59, 130, 246, 0.3),
      0 0 30px rgba(59, 130, 246, 0.2);
  }
  
  .dark elevenlabs-convai {
    box-shadow: 
      0 0 20px rgba(96, 165, 250, 0.5),
      0 0 40px rgba(96, 165, 250, 0.3);
  }
}

/* Hover effect for desktop */
@media (min-width: 769px) {
  elevenlabs-convai:hover {
    transform: scale(1.05);
    box-shadow: 
      0 0 30px rgba(59, 130, 246, 0.4),
      0 0 60px rgba(59, 130, 246, 0.3),
      0 0 90px rgba(59, 130, 246, 0.2);
  }
  
  .dark elevenlabs-convai:hover {
    box-shadow: 
      0 0 35px rgba(96, 165, 250, 0.6),
      0 0 70px rgba(96, 165, 250, 0.4),
      0 0 105px rgba(96, 165, 250, 0.3);
  }
}
```

### 3. Theme Integration

The widget styling leverages the existing dark mode implementation:

- **Light Mode Colors**: Blue tones (rgba(59, 130, 246, ...)) matching the portfolio's blue-600 color
- **Dark Mode Colors**: Lighter blue tones (rgba(96, 165, 250, ...)) for better visibility
- **Theme Detection**: Uses the existing `.dark` class on the `<html>` or `<body>` element
- **No JavaScript Changes**: The existing dark mode toggle automatically applies to the widget

## Data Models

No data models are required for this feature. The widget is a self-contained component that communicates directly with ElevenLabs' servers.

## Error Handling

### Script Loading Failures

**Scenario**: The ElevenLabs CDN script fails to load

**Handling**:
- The `async` attribute ensures the page continues to load normally
- No error messages are displayed to users
- The widget simply won't appear if the script fails
- Page functionality remains unaffected

### Widget Initialization Failures

**Scenario**: The widget element is present but fails to initialize

**Handling**:
- The custom element will remain in the DOM but won't be interactive
- CSS styling will still apply, but the widget won't function
- No visual errors or broken UI elements
- Graceful degradation - the portfolio remains fully functional

### Network Issues

**Scenario**: User has poor connectivity or blocks third-party scripts

**Handling**:
- Widget won't load, but page remains functional
- No layout shifts or broken elements
- User can still access all portfolio content normally

## Testing Strategy

### Visual Testing

1. **Theme Compatibility**
   - Verify glow effect in light mode
   - Verify enhanced glow effect in dark mode
   - Test theme toggle transitions
   - Ensure colors match the portfolio's design system

2. **Responsive Design**
   - Test on mobile devices (320px - 767px)
   - Test on tablets (768px - 1024px)
   - Test on desktop (1025px+)
   - Verify positioning doesn't obstruct content
   - Check touch target sizes on mobile

3. **Animation Performance**
   - Verify pulse animation runs smoothly
   - Check for any performance issues with the glow effect
   - Test on lower-end devices

### Functional Testing

1. **Widget Functionality**
   - Verify widget loads and initializes
   - Test voice interaction capabilities
   - Ensure agent responds correctly
   - Test on different browsers (Chrome, Firefox, Safari, Edge)

2. **Integration Testing**
   - Verify widget doesn't interfere with existing functionality
   - Test visitor counter still works
   - Ensure navigation remains functional
   - Check that forms and links work correctly

3. **Performance Testing**
   - Measure page load time impact
   - Check for layout shifts (CLS metric)
   - Verify async loading works correctly
   - Test with slow network conditions

### Browser Compatibility

Test on:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Accessibility Testing

1. **Keyboard Navigation**
   - Verify widget is keyboard accessible
   - Test tab order doesn't break
   - Ensure focus indicators are visible

2. **Screen Readers**
   - Test with VoiceOver (macOS/iOS)
   - Test with NVDA (Windows)
   - Ensure widget is properly announced

## Implementation Notes

### Z-Index Management

The widget uses `z-index: 40` to ensure it:
- Appears above regular content
- Appears above the fixed header (which uses lower z-index)
- Stays below any modals or overlays (if added in the future)

### Performance Considerations

- **Async Loading**: Script loads asynchronously to prevent blocking
- **CSS Animations**: Uses GPU-accelerated properties (transform, opacity)
- **Minimal DOM Impact**: Single custom element with minimal styling
- **No JavaScript Required**: All styling is pure CSS

### Future Enhancements

Potential improvements for future iterations:
- Add a minimize/maximize button
- Implement custom positioning options
- Add sound indicators for voice activity
- Create custom branding for the widget interface
- Add analytics tracking for widget interactions

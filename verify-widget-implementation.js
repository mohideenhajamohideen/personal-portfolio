#!/usr/bin/env node

/**
 * Widget Implementation Verification Script
 * Checks that the ElevenLabs widget is properly implemented in index.html
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    bold: '\x1b[1m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFile(filePath) {
    if (!fs.existsSync(filePath)) {
        log(`✗ File not found: ${filePath}`, 'red');
        return null;
    }
    return fs.readFileSync(filePath, 'utf8');
}

function runTests() {
    log('\n' + '='.repeat(60), 'blue');
    log('  ElevenLabs Widget Implementation Verification', 'bold');
    log('='.repeat(60) + '\n', 'blue');

    const indexPath = path.join(__dirname, 'index.html');
    const content = checkFile(indexPath);
    
    if (!content) {
        log('Cannot proceed without index.html', 'red');
        process.exit(1);
    }

    let passed = 0;
    let failed = 0;

    // Test 1: Widget element exists
    log('Test 1: Widget Element Presence', 'blue');
    if (content.includes('<elevenlabs-convai')) {
        log('  ✓ Widget element found in HTML', 'green');
        passed++;
    } else {
        log('  ✗ Widget element NOT found', 'red');
        failed++;
    }

    // Test 2: Agent ID is correct
    log('\nTest 2: Agent ID Configuration', 'blue');
    if (content.includes('agent-id="agent_6301k7fhssjnepnvvajj2krtefc7"')) {
        log('  ✓ Correct agent ID configured', 'green');
        passed++;
    } else {
        log('  ✗ Agent ID missing or incorrect', 'red');
        failed++;
    }

    // Test 3: Script tag exists
    log('\nTest 3: ElevenLabs Script Tag', 'blue');
    if (content.includes('https://unpkg.com/@elevenlabs/convai-widget-embed')) {
        log('  ✓ Script tag found with correct CDN URL', 'green');
        passed++;
    } else {
        log('  ✗ Script tag missing or incorrect', 'red');
        failed++;
    }

    // Test 4: Script is async
    log('\nTest 4: Async Script Loading', 'blue');
    const scriptMatch = content.match(/<script[^>]*convai-widget-embed[^>]*>/);
    if (scriptMatch && scriptMatch[0].includes('async')) {
        log('  ✓ Script loads asynchronously', 'green');
        passed++;
    } else {
        log('  ✗ Script is not set to async', 'red');
        failed++;
    }

    // Test 5: Widget CSS styles exist
    log('\nTest 5: Widget CSS Styles', 'blue');
    if (content.includes('elevenlabs-convai {')) {
        log('  ✓ Widget CSS styles found', 'green');
        passed++;
    } else {
        log('  ✗ Widget CSS styles missing', 'red');
        failed++;
    }

    // Test 6: Fixed positioning
    log('\nTest 6: Fixed Positioning', 'blue');
    if (content.includes('position: fixed !important')) {
        log('  ✓ Fixed positioning configured', 'green');
        passed++;
    } else {
        log('  ✗ Fixed positioning missing', 'red');
        failed++;
    }

    // Test 7: Glow effect (box-shadow)
    log('\nTest 7: Glow Effect (Box Shadow)', 'blue');
    if (content.includes('box-shadow:') && content.includes('rgba(59, 130, 246')) {
        log('  ✓ Glow effect (box-shadow) configured', 'green');
        passed++;
    } else {
        log('  ✗ Glow effect missing', 'red');
        failed++;
    }

    // Test 8: Dark mode styles
    log('\nTest 8: Dark Mode Styles', 'blue');
    if (content.includes('.dark elevenlabs-convai')) {
        log('  ✓ Dark mode styles found', 'green');
        passed++;
    } else {
        log('  ✗ Dark mode styles missing', 'red');
        failed++;
    }

    // Test 9: Pulse animation
    log('\nTest 9: Pulse Animation', 'blue');
    if (content.includes('@keyframes pulse-glow')) {
        log('  ✓ Pulse animation keyframes found', 'green');
        passed++;
    } else {
        log('  ✗ Pulse animation missing', 'red');
        failed++;
    }

    // Test 10: Dark mode pulse animation
    log('\nTest 10: Dark Mode Pulse Animation', 'blue');
    if (content.includes('@keyframes pulse-glow-dark')) {
        log('  ✓ Dark mode pulse animation found', 'green');
        passed++;
    } else {
        log('  ✗ Dark mode pulse animation missing', 'red');
        failed++;
    }

    // Test 11: Mobile responsive styles
    log('\nTest 11: Mobile Responsive Styles', 'blue');
    if (content.includes('@media (max-width: 768px)')) {
        log('  ✓ Mobile breakpoint styles found', 'green');
        passed++;
    } else {
        log('  ✗ Mobile responsive styles missing', 'red');
        failed++;
    }

    // Test 12: Desktop hover styles
    log('\nTest 12: Desktop Hover Styles', 'blue');
    if (content.includes('@media (min-width: 769px)') && content.includes('elevenlabs-convai:hover')) {
        log('  ✓ Desktop hover styles found', 'green');
        passed++;
    } else {
        log('  ✗ Desktop hover styles missing', 'red');
        failed++;
    }

    // Test 13: Z-index configuration
    log('\nTest 13: Z-Index Configuration', 'blue');
    if (content.includes('z-index: 40')) {
        log('  ✓ Z-index properly configured', 'green');
        passed++;
    } else {
        log('  ✗ Z-index missing or incorrect', 'red');
        failed++;
    }

    // Test 14: Border radius
    log('\nTest 14: Border Radius', 'blue');
    if (content.includes('border-radius: 50%')) {
        log('  ✓ Border radius configured', 'green');
        passed++;
    } else {
        log('  ✗ Border radius missing', 'red');
        failed++;
    }

    // Test 15: Transition effects
    log('\nTest 15: Transition Effects', 'blue');
    if (content.includes('transition: all 0.3s cubic-bezier')) {
        log('  ✓ Smooth transitions configured', 'green');
        passed++;
    } else {
        log('  ✗ Transition effects missing', 'red');
        failed++;
    }

    // Test 16: Widget placement (before closing body tag)
    log('\nTest 16: Widget Placement', 'blue');
    const bodyCloseIndex = content.lastIndexOf('</body>');
    const widgetIndex = content.lastIndexOf('<elevenlabs-convai');
    if (widgetIndex > 0 && widgetIndex < bodyCloseIndex) {
        log('  ✓ Widget placed before closing body tag', 'green');
        passed++;
    } else {
        log('  ✗ Widget placement incorrect', 'red');
        failed++;
    }

    // Summary
    log('\n' + '='.repeat(60), 'blue');
    log('  Test Summary', 'bold');
    log('='.repeat(60), 'blue');
    log(`\nTotal Tests: ${passed + failed}`, 'blue');
    log(`Passed: ${passed}`, 'green');
    log(`Failed: ${failed}`, failed > 0 ? 'red' : 'green');
    log(`Pass Rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%\n`, 
        failed === 0 ? 'green' : 'yellow');

    if (failed === 0) {
        log('✓ All tests passed! Widget implementation is complete.', 'green');
        log('  You can now test the widget in a browser.\n', 'green');
    } else {
        log('✗ Some tests failed. Please review the implementation.', 'red');
        log('  Check the failed tests above for details.\n', 'red');
    }

    process.exit(failed > 0 ? 1 : 0);
}

// Run the tests
runTests();

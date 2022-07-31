
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

// is describe required here?
// describe('Duel duo tests', () => {

    test('Title shows up when page loads', async () => {
    await driver.findElement(By.id('title'))
    await driver.sleep(3000)
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw button displays div with id=choices', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(3000);

    const div = await driver.findElement(By.id('choices'))
    const displayed = await div.isDisplayed()
    expect(displayed).toBe(true);
})

test('Add to duo button displays player-id div', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(3000);

    await driver.findElement(By.className('bot-btn')).click();
    await driver.sleep(3000);

    const div = await driver.findElement(By.id('player-duo'))
    const displayed = await div.isDisplayed()
    expect(displayed).toBe(true);
})
test('Play Again button resets game and displays Drawn button', async () => {
    await driver.findElement(By.id('play-again')).click();
    await driver.sleep(3000);

    const div = await driver.findElement(By.id('draw'))
    const displayed = await div.isDisplayed()
    expect(displayed).toBe(true);
})

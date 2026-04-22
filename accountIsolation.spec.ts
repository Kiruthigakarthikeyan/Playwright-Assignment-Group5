import { test, expect } from '../fixtures/baseTest';
import { users, amounts } from '../utils/testData';

test('Account-level data isolation across users', async ({
  loginPage,
  dashboardPage,
}) => {

  // ---- User A ----
  await loginPage.goto();
  await loginPage.login(users.userA);

  await dashboardPage.deposit(amounts.deposit);
  const userABalance = await dashboardPage.getBalance();

  await dashboardPage.logout();

  // ---- User B ----
  await loginPage.login(users.userB);

  const userBBalance = await dashboardPage.getBalance();

  // Assertion: User B should NOT see User A balance
  expect(userBBalance).not.toBe(userABalance);
});
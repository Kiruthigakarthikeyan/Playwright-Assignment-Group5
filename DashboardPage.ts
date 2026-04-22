import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async deposit(amount: string) {
    await this.page.getByRole('button', { name: 'Deposit' }).click();
    await this.page.locator('input[ng-model="amount"]').fill(amount);
    await this.page.waitForTimeout (3000);
    await this.page.locator('form').getByRole('button', { name: 'Deposit' }).click();
  }

  async withdraw(amount: string) {
    await this.page.getByRole('button', { name: 'Withdrawl' }).click();
    await this.page.waitForTimeout (2000);
    await this.page.locator('input[ng-model="amount"]').fill(amount);
    await this.page.waitForTimeout (2000);
    await this.page.getByRole('button', { name: 'Withdraw' }).click();
    await this.page.waitForTimeout (2000);
  }

  async getBalance(): Promise<number> {
  const balanceText = await this.page
    .locator('strong.ng-binding')
    .nth(1)
    .textContent();

  return Number(balanceText);
}

  async logout() {
    await this.page.getByRole('button', { name: 'Logout' }).click();
  }
}
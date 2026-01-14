import { Page } from '@playwright/test';
import { loginpom } from './loginpom.page';
export class productpom extends loginpom {
    constructor(p: Page) {
        super(p);
    }
    // Les sélecteurs
    elementspro = {
        addToCart: () => this.page.locator("#add-to-cart-sauce-labs-backpack"),
        removeToCart: () => this.page.locator("#remove-sauce-labs-backpack"),
        cartBadge: () => this.page.locator(".shopping_cart_badge")
    }

    // Les méthodes
    async addToCartBtn() {
        await this.elementspro.addToCart().click();
    }

    async cartBtn() {
        await this.elementspro.cartBadge().click();
    }

    async getCartcount() {
        return await this.elementspro.cartBadge().textContent();
    }

    async getCartRemove() {
        return await this.elementspro.removeToCart().textContent();
    }
}
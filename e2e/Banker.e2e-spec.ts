import {browser, element, by, ElementFinder} from 'protractor';
import Banker from "../src/modules/Banker";
import {describe} from "selenium-webdriver/testing";

describe('Banker Module', () => {
  const myPin = 1234;
  const myAccount  = 'ruzencev';

  beforeAll(() => {
    Banker.newAccount(myAccount, myPin);
  });

  it('Has my account.', () => {
    expect(Banker.accounts[myAccount]).not.toBe(null);
  });

  it('Should Be Able To create an account', () => {
    expect(Banker.accounts['ruzencev2']).toBe(undefined);
    Banker.newAccount('ruzencev2', 1234);
    expect(Banker.accounts['ruzencev2']).not.toBe(null);
  });

  it('Should not Be Able To create an account with existing id', () => {
    expect(() => Banker.newAccount('ruzencev', 1234)).toThrow(new Error('Account with this id already exists.'));
  });

  describe('Banker Transactions', () => {
    it('The user should be able to view the balance given pin', () => {
      let balance = Banker.getBalance(myAccount,myPin);
      expect(Banker.accounts['ruzencev2']).not.toBeGreaterThanOrEqual(0);
    });
    it('The user should not be able to view the balance without pin', () => {
      expect(() => Banker.getBalance('ruzencev', 12345)).toThrow(new Error('Pin is incorrect'));
    });
    it('The user should not be able to withdraw more than balance', () => {
      expect(() => Banker.withdrawMoney('ruzencev', 1234, 1000)).toThrow(new Error('Withdraw mount can be more than balance'));
    });
    it('The user should be able to add money with pin', () => {
      Banker.depositMoney('ruzencev', 1234, 400);
      let acc = Banker.accounts[myAccount];
      expect(acc.getBalance(myPin)).toBe(400);
    });
    it('The user should be able to withdraw money with pin', () => {
      Banker.withdrawMoney(myAccount,myPin, 200);
      let acc = Banker.accounts[myAccount];
      expect(acc.getBalance(myPin)).toBe(200);
    });
    it('The user should not be able to withdraw money without pin', () => {
      expect(() => Banker.withdrawMoney('ruzencev', 12345,190)).toThrow(new Error('Pin is incorrect'));
    });
    it('The user should not be able to withdraw more than his limit(300) in the past 24 hours', () => {
      expect(() => Banker.withdrawMoney('ruzencev', 1234, 110)).toThrow(new Error('Your current withdraw limit set to 300. Withdrawn in past 24hr: 200'));
    });
  })


});

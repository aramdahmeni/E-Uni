import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, GuardResult, MaybeAsync, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService) as AuthService;

  if (authService.isAuthenticated()) {
    return true;
  } else {
    alert("Authentication failed, please log in first");
    return false;
  }
};
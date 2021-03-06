/**
 * Copyright 2014 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: SecurityDomain
module Shumway.AVM2.AS.flash.system {
  import somewhatImplemented = Shumway.Debug.somewhatImplemented;
  import dummyConstructor = Shumway.Debug.dummyConstructor;
  export class SecurityDomain extends ASNative {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static classSymbols: string [] = null; // [];
    
    // List of instance symbols to link.
    static instanceSymbols: string [] = null; // [];

    static _currentDomain: SecurityDomain;
    
    constructor () {
      false && super();
    }
    
    // JS -> AS Bindings
    
    
    // AS -> JS Bindings
    static get currentDomain(): flash.system.SecurityDomain {
      if (!this._currentDomain) {
        this._currentDomain = new system.SecurityDomain();
      }
      somewhatImplemented("public flash.system.SecurityDomain::get currentDomain");
      return this._currentDomain;
    }
  }
}

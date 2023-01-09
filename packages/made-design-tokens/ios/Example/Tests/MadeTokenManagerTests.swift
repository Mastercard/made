//
//  MadeTokenManagerTests.swift
//  MadeDesignTokens
//
//  Created by Mastercard on 15/03/21.
//  Copyright © 2021 Mastercard. All rights reserved.
//
		

import XCTest
@testable import MadeDesignTokens

class MadeTokenManagerTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testInitSucess() {
        let tokenManager = MadeTokenManager(.partnerbank)
        XCTAssertNotNil(tokenManager)
    }
}

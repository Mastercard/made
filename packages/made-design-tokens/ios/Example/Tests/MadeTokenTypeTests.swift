//
//  MadeTokenTypeTests.swift
//  MadeDesignTokens
//
//  Created by Mastercard on 16/03/21.
//  Copyright © 2021 Mastercard. All rights reserved.
//
		

import XCTest
@testable import MadeDesignTokens

class MadeTokenTypeTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testInitSucessForDefaultValue() {
        let tokenType = MadeTokenType(rawValue: "")
        XCTAssertEqual(tokenType?.rawValue, "partnerbank")
    }
    
    func testInitSucessForPartnerBank() {
        let tokenType = MadeTokenType(rawValue: "partnerbank")
        XCTAssertEqual(tokenType?.rawValue, "partnerbank")
        XCTAssertEqual(MadeTokenType.partnerbank.rawValue, "partnerbank")
    }
}

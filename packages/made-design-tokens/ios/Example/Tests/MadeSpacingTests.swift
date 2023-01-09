//
//  MadeSpacingTests.swift
//  MadeDesignTokens
//
//  Created by Mastercard on 15/03/21.
//  Copyright © 2021 Mastercard. All rights reserved.
//
		

import XCTest
@testable import MadeDesignTokens

class MadeSpacingTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testSpacingForPartnerBank() {
        let spacing = PartnerbankSpacing()
        
        XCTAssertEqual(spacing.x1, 8)
        XCTAssertEqual(spacing.x2, 16)
        XCTAssertEqual(spacing.x3, 24)
        XCTAssertEqual(spacing.x4, 32)
        XCTAssertEqual(spacing.x5, 40)
        XCTAssertEqual(spacing.x6, 48)
        XCTAssertEqual(spacing.x7, 56)
        XCTAssertEqual(spacing.x8, 68)
        XCTAssertEqual(spacing.x9, 72)
    }
}

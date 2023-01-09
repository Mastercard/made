//
//  FontTokensVC.swift
//  MadeDesignTokens
//
//  Created by Mastercard on 02/07/21.
//  Copyright © 2021 Mastercard. All rights reserved.
//
		

import UIKit
import MadeDesignTokens


class FontTokensVC: UIViewController {

    @IBOutlet weak var tblViewTexts: UITableView!
    
    var textsTokenArray = [Dictionary<String, Any>]()
    var tokenManager = MadeTokenManager(.partnerbank)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        tblViewTexts.estimatedRowHeight = 80
        tblViewTexts.rowHeight = UITableView.automaticDimension
        tblViewTexts.tableFooterView = UIView()
        
        textsTokenArray.append(["tokenName" : "HeadLine", "tokenDescription" : "HeadLine - 40px", "value" : tokenManager.font.bold.withSize(tokenManager.fontSize.headline), "color" : tokenManager.color.on_surface])
        textsTokenArray.append(["tokenName" : "Large Title", "tokenDescription" : "Large Title - 32px", "value" : tokenManager.font.bold.withSize(tokenManager.fontSize.title_large), "color" : tokenManager.color.on_surface])
        textsTokenArray.append(["tokenName" : "Title 1", "tokenDescription" : "Title 1 - 28px", "value" : tokenManager.font.bold.withSize(tokenManager.fontSize.title_1), "color" : tokenManager.color.on_surface])
        textsTokenArray.append(["tokenName" : "Title 2", "tokenDescription" : "Title 2 - 24px", "value" : tokenManager.font.bold.withSize(tokenManager.fontSize.title_2), "color" : tokenManager.color.on_surface])
        textsTokenArray.append(["tokenName" : "Title 3", "tokenDescription" : "Title 3 - 20px", "value" : tokenManager.font.bold.withSize(tokenManager.fontSize.title_3), "color" : tokenManager.color.on_surface])
        textsTokenArray.append(["tokenName" : "Title 4", "tokenDescription" : "Title 4 - 16px", "value" : tokenManager.font.bold.withSize(tokenManager.fontSize.title_4), "color" : tokenManager.color.on_surface])
        textsTokenArray.append(["tokenName" : "Title 5", "tokenDescription" : "Title 5 - 13px", "value" : tokenManager.font.bold.withSize(tokenManager.fontSize.title_4), "color" : tokenManager.color.on_surface])
        textsTokenArray.append(["tokenName" : "Body", "tokenDescription" : "Body - 14px", "value" : tokenManager.font.regular.withSize(tokenManager.fontSize.body), "color" : tokenManager.color.on_surface])
        textsTokenArray.append(["tokenName" : "Button", "tokenDescription" : "Button - 16px", "value" : tokenManager.font.bold.withSize(tokenManager.fontSize.button), "color" : tokenManager.color.on_surface])
        textsTokenArray.append(["tokenName" : "Callout", "tokenDescription" : "Callout - 14px", "value" : tokenManager.font.bold.withSize(tokenManager.fontSize.body), "color" : tokenManager.color.on_surface])
        textsTokenArray.append(["tokenName" : "Caption Medium", "tokenDescription" : "Caption Medium - 12px", "value" : tokenManager.font.medium_nrw.withSize(tokenManager.fontSize.body), "color" : tokenManager.color.on_surface])
        textsTokenArray.append(["tokenName" : "Caption Default", "tokenDescription" : "Caption Default - 12px", "value" : tokenManager.font.regular_nrw.withSize(tokenManager.fontSize.body), "color" : tokenManager.color.on_surface])
        textsTokenArray.append(["tokenName" : "Caption Small", "tokenDescription" : "Caption Small - 11px", "value" : tokenManager.font.regular.withSize(tokenManager.fontSize.body), "color" : tokenManager.color.on_surface])
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

extension FontTokensVC: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return  textsTokenArray.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "FontTokenCell", for: indexPath) as! FontTokenCell
        
        cell.lblTokenValue.text = textsTokenArray[indexPath.row]["tokenDescription"] as? String
        cell.lblTokenValue.font = (textsTokenArray[indexPath.row]["value"] as! UIFont)
        cell.lblTokenValue.textColor = (textsTokenArray[indexPath.row]["color"] as! UIColor)
        
        cell.lblTokenName.text = textsTokenArray[indexPath.row]["tokenName"] as? String
        cell.lblTokenName.font = tokenManager.font.bold.withSize(tokenManager.fontSize.title_5)
        cell.lblTokenName.textColor = tokenManager.color.on_surface
        return cell
    }
}

class FontTokenCell: UITableViewCell {
    
    @IBOutlet weak var lblTokenValue: UILabel!
    @IBOutlet weak var lblTokenName: UILabel!
    
}

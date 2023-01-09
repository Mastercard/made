//
//  ColorsTokensVC.swift
//  MadeDesignTokens
//
//  Created by Mastercard on 02/07/21.
//  Copyright © 2021 Mastercard. All rights reserved.
//
		

import UIKit
import MadeDesignTokens

class ColorsTokensVC: UIViewController {

    @IBOutlet weak var tblViewColors: UITableView!
    
    var colorsTokenArray = [Dictionary<String, Any>]()
    var tokenManager = MadeTokenManager(.partnerbank)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        tblViewColors.estimatedRowHeight = 80
        tblViewColors.rowHeight = UITableView.automaticDimension
        tblViewColors.tableFooterView = UIView()
        
        colorsTokenArray.append(["tokenName" : "accent_01", "value" : tokenManager.color.accent_01])
        colorsTokenArray.append(["tokenName" : "accent_02", "value" : tokenManager.color.accent_02])
        colorsTokenArray.append(["tokenName" : "background", "value" : tokenManager.color.background])
        colorsTokenArray.append(["tokenName" : "decorative_01", "value" : tokenManager.color.decorative_01])
        colorsTokenArray.append(["tokenName" : "decorative_02", "value" : tokenManager.color.decorative_02])
        colorsTokenArray.append(["tokenName" : "disabled", "value" : tokenManager.color.disabled])
        colorsTokenArray.append(["tokenName" : "error", "value" : tokenManager.color.error])
        colorsTokenArray.append(["tokenName" : "on_background", "value" : tokenManager.color.on_background])
        colorsTokenArray.append(["tokenName" : "on_error", "value" : tokenManager.color.on_error])
        colorsTokenArray.append(["tokenName" : "on_primary", "value" : tokenManager.color.on_primary])
        colorsTokenArray.append(["tokenName" : "on_surface", "value" : tokenManager.color.on_surface])
        colorsTokenArray.append(["tokenName" : "primary_light", "value" : tokenManager.color.primary_light])
        colorsTokenArray.append(["tokenName" : "primary", "value" : tokenManager.color.primary])
        colorsTokenArray.append(["tokenName" : "secondary", "value" : tokenManager.color.secondary])
        colorsTokenArray.append(["tokenName" : "secondary_light", "value" : tokenManager.color.secondary_light])
        colorsTokenArray.append(["tokenName" : "shadow", "value" : tokenManager.color.shadow])
        colorsTokenArray.append(["tokenName" : "surface", "value" : tokenManager.color.surface])
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

extension ColorsTokensVC: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return  colorsTokenArray.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "ColorTokenCell", for: indexPath) as! ColorTokenCell
        cell.imageViewColor.backgroundColor = colorsTokenArray[indexPath.row]["value"] as? UIColor
        cell.imageViewColor.applyShadow(color: tokenManager.color.shadow)
        cell.imageViewColor.layer.borderColor = tokenManager.color.on_surface.cgColor
        cell.lblTokenName.text = colorsTokenArray[indexPath.row]["tokenName"] as? String
        cell.lblTokenName.font = tokenManager.font.bold.withSize(tokenManager.fontSize.title_4)
        cell.lblTokenName.textColor = tokenManager.color.on_surface
        return cell
    }
}

class ColorTokenCell: UITableViewCell {
    
    @IBOutlet weak var imageViewColor: UIImageView!
    @IBOutlet weak var lblTokenName: UILabel!
    
}

extension UIImageView {
    
    func applyShadow (
        color: UIColor = .white,
        alpha: Float = 0.05,
        x: CGFloat = 0,
        y: CGFloat = 0,
        blur: CGFloat = 5.0,
        spread: CGFloat = 2.0) {
   
        layer.shadowColor = color.cgColor
        layer.shadowOpacity = alpha
        layer.shadowOffset = CGSize(width: x, height: y)
        layer.shadowRadius = blur / 2
        let dx = -spread
        let rect = bounds.insetBy(dx: dx, dy: dx)
        layer.shadowPath = UIBezierPath(roundedRect: rect, cornerRadius: layer.cornerRadius).cgPath
        clipsToBounds = false
    }
}

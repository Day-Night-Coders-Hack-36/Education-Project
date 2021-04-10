using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;
using System.Diagnostics;

namespace WinFormsApp1
{
    public partial class FirstControl : UserControl
    {
        public FirstControl()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            var p = new Process();
            p.StartInfo = new ProcessStartInfo(@"Home-page.html")
            {
                UseShellExecute = true
            };
            p.Start();
        }
    }
}

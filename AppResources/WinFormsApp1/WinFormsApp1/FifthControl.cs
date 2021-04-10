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
    public partial class FifthControl : UserControl
    {
        public FifthControl()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            var p = new Process();
            p.StartInfo = new ProcessStartInfo(@"signup.html")
            {
                UseShellExecute = true
            };
            p.Start();
        }
    }
}
